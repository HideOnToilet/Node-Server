import express from "express";
import { Octokit } from "@octokit/rest";
import simpleGit from "simple-git";
import multer from "multer";
import path from "path";
import fs from "fs-extra";
import { fileURLToPath } from "url";
import dotenv from "dotenv"; // Hoặc require('dotenv') nếu dùng CommonJS

dotenv.config(); // Đọc và tải cấu hình từ file .env

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
const PORT = 3000;
const git = simpleGit();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route để lưu GitHub username và token vào file .env
app.post("/save-token", (req, res) => {
  const { username, token, email } = req.body; // Thêm email vào đây

  if (!username || !token || !email) {
    return res.status(400).json({ error: "Thiếu username, token hoặc email" });
  }

  const envPath = path.join(__dirname, ".env");

  // Kiểm tra nếu file .env đã tồn tại, xóa nó đi
  if (fs.existsSync(envPath)) {
    fs.unlinkSync(envPath); // Xóa file .env cũ nếu có
    console.log(".env file cũ đã được xóa.");
  }

  // Tạo nội dung file .env với thông tin từ frontend
  const envContent = `GITHUB_USERNAME=${username}\nGITHUB_TOKEN=${token}\nGMAIL=${email}\n`;

  // Viết vào file .env
  fs.writeFile(envPath, envContent, "utf8", (err) => {
    if (err) {
      console.error("Lỗi khi lưu vào file .env:", err);
      return res.status(500).json({ error: "Không thể lưu vào file .env" });
    }
    res.json({ message: "Token, username và email đã được lưu vào file .env" });
  });
});

// Đặt thư mục đích cho các file tải lên
const upload = multer({ dest: "uploads/" });

app.post("/login", async (req, res) => {
  const { username, token } = req.body;
  try {
    const octokit = new Octokit({ auth: token });
    const repos = await octokit.repos.listForUser({ username });
    res.json(repos.data);
  } catch (error) {
    res.status(400).json({ error: "Không thể lấy danh sách repository." });
  }
});

app.post("/clone", async (req, res) => {
  const { username, token, repoName } = req.body;
  const repoPath = path.join(__dirname, "repos", repoName);
  if (fs.existsSync(repoPath)) fs.rmSync(repoPath, { recursive: true, force: true });

  const git = simpleGit();
  try {
    await git.clone(`https://${username}:${token}@github.com/${username}/${repoName}.git`, repoPath);
    res.json({ message: "Clone repository thành công." });
  } catch (error) {
    res.status(500).json({ error: "Không thể clone repository." });
  }
});

app.post("/connect", async (req, res) => {
  const { username, token, repoName } = req.body;
  const repoPath = path.join(__dirname, "repos", repoName); // Thư mục repository trong thư mục 'repos'
  const deployPath = path.join(__dirname, "file-deploy");  // Thư mục 'file-deploy'
  const webPath = path.join(repoPath, "web");  // Thư mục 'web' trong repository vừa tạo

  // Bước 1: Kiểm tra và xóa thư mục repository nếu đã tồn tại
  if (fs.existsSync(repoPath)) {
    console.log("Thư mục repository đã tồn tại. Đang xóa thư mục cũ...");
    fs.rmSync(repoPath, { recursive: true, force: true }); // Xóa thư mục cũ
  }
  fs.mkdirSync(repoPath, { recursive: true }); // Tạo lại thư mục mới

  // Bước 2: Di chuyển nội dung từ thư mục 'file-deploy' vào thư mục repository
  if (fs.existsSync(deployPath)) {
    console.log("Đang sao chép file-deploy vào repository...");
    fs.copySync(deployPath, repoPath); // Di chuyển nội dung file-deploy vào repository
  }

  // Bước 3: Kiểm tra và xóa thư mục 'web' nếu đã tồn tại, rồi tạo lại thư mục 'web'
  if (fs.existsSync(webPath)) {
    console.log("Thư mục 'web' đã tồn tại. Đang xóa thư mục cũ...");
    fs.rmSync(webPath, { recursive: true, force: true }); // Xóa thư mục cũ
  }
  fs.mkdirSync(webPath, { recursive: true }); // Tạo lại thư mục mới

  // Bước 4: Clone repository vào thư mục 'web' bên trong repository
  const git = simpleGit();
  try {
    console.log(`Đang clone repository ${repoName} vào thư mục 'web' trong repository...`);
    await git.clone(`https://${username}:${token}@github.com/${username}/${repoName}.git`, webPath);
    console.log("Clone thành công vào thư mục 'web'!");

    // Bước 5: Xóa thư mục .git sau khi clone
    const gitDir = path.join(webPath, ".git");
    if (fs.existsSync(gitDir)) {
      console.log("Đang xóa thư mục .git...");
      fs.rmSync(gitDir, { recursive: true, force: true }); // Xóa thư mục .git
      console.log("Đã xóa thư mục .git.");
    }

    res.json({ message: "Kết nối và sao chép thư mục thành công." });
  } catch (error) {
    console.error("Lỗi khi clone repository vào thư mục web:", error);
    res.status(500).json({ error: "Không thể clone repository vào thư mục web." });
  }
});


// Route để lấy cấu trúc thư mục
app.get("/api/project-file-tree", (req, res) => {
  const repoName = req.query.repoName;

  if (!repoName) {
    return res.status(400).json({ error: "Missing repoName parameter" });
  }

  const repoPath = path.join(__dirname, "repos", repoName);

  // Hàm để lấy danh sách file và thư mục
  const getFolderStructure = (dirPath) => {
    try {
      const items = fs.readdirSync(dirPath);
      return items.filter((item) => item !== ".git").map((item) => {
        const itemPath = path.join(dirPath, item);
        const isDirectory = fs.statSync(itemPath).isDirectory();
        return {
          name: item,
          path: itemPath,
          isDirectory: isDirectory,
          children: isDirectory ? getFolderStructure(itemPath) : [],
        };
      });
    } catch (err) {
      return [];
    }
  };

  const folderStructure = getFolderStructure(repoPath);
  res.json(folderStructure);
});

// Route để lấy nội dung file
app.get("/api/project-file", (req, res) => {
  const filePath = req.query.filePath;

  if (!filePath) {
    return res.status(400).json({ error: "Thiếu tham số filePath" });
  }

  const decodedPath = decodeURIComponent(filePath);
  const fullPath = path.resolve(decodedPath);

  fs.exists(fullPath, (exists) => {
    if (!exists) {
      return res.status(404).json({ error: "File không tồn tại" });
    }

    fs.readFile(fullPath, "utf8", (err, data) => {
      if (err) {
        return res.status(500).json({ error: "Không thể đọc file" });
      }
      res.send(data);
    });
  });
});

// Route để lưu nội dung file
app.post("/api/save-file", (req, res) => {
  const { filePath, content } = req.body;

  if (!filePath || !content) {
    return res.status(400).json({ error: "Thiếu tham số filePath hoặc nội dung" });
  }

  const decodedPath = decodeURIComponent(filePath);
  const fullPath = path.resolve(decodedPath);

  fs.exists(fullPath, (exists) => {
    if (!exists) {
      return res.status(404).json({ error: "File không tồn tại" });
    }

    fs.writeFile(fullPath, content, "utf8", (err) => {
      if (err) {
        return res.status(500).json({ error: "Không thể lưu file" });
      }
      res.json({ message: "File đã được lưu thành công" });
    });
  });
});

// Route tải file lên
app.post("/upload-databasefile", upload.single("databasefile"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "Không có file nào được tải lên." });
  }

  const { repoName } = req.body;
  if (!repoName) {
    return res.status(400).json({ error: "Thiếu repoName trong yêu cầu." });
  }

  // Đảm bảo thư mục 'data' trong repository tồn tại
  const destDir = path.join(__dirname, 'repos', repoName, 'data');
  
  // Kiểm tra xem thư mục đích có tồn tại không, nếu không thì tạo mới
  fs.ensureDirSync(destDir);

  // Đường dẫn đầy đủ đến file đích
  const destPath = path.join(destDir, req.file.originalname);

  try {
    // Di chuyển file từ thư mục 'uploads' vào thư mục 'data' của repository
    fs.renameSync(req.file.path, destPath);

    console.log(`Tải file ${req.file.originalname} thành công vào thư mục ${destDir}`);
    res.json({ message: `Tải file ${req.file.originalname} thành công vào thư mục data` });
  } catch (err) {
    console.error("Lỗi khi di chuyển file:", err);
    res.status(500).json({ error: "Không thể di chuyển file" });
  }
});

// Route lưu cấu hình Database vào docker-compose.yml
app.post("/api/save-database-config", (req, res) => {
  const { dbName, dbUser, dbPassword, dbRootPassword, repoName } = req.body;
  const dockerComposePath = path.join(__dirname, "repos", repoName, "docker-compose.yml");

  try {
    // Đọc nội dung của file docker-compose.yml
    let dockerComposeContent = fs.readFileSync(dockerComposePath, "utf8");

    // Sửa giá trị trong phần db service
    dockerComposeContent = dockerComposeContent
      .replace(/(MYSQL_DATABASE:\s*).*/, `$1${dbName}`)
      .replace(/(MYSQL_USER:\s*).*/, `$1${dbUser}`)
      .replace(/(MYSQL_PASSWORD:\s*).*/, `$1${dbPassword}`)
      .replace(/(MYSQL_ROOT_PASSWORD:\s*).*/, `$1${dbRootPassword}`);
    
    // Sửa giá trị trong phần phpmyadmin service
    dockerComposeContent = dockerComposeContent
      .replace(/(phpmyadmin:[\s\S]*?MYSQL_USER:\s*).*/, `$1${dbUser}`)
      .replace(/(phpmyadmin:[\s\S]*?MYSQL_PASSWORD:\s*).*/, `$1${dbPassword}`)
      .replace(/(phpmyadmin:[\s\S]*?MYSQL_ROOT_PASSWORD:\s*).*/, `$1${dbRootPassword}`);

    // Ghi lại nội dung đã chỉnh sửa vào file
    fs.writeFileSync(dockerComposePath, dockerComposeContent, "utf8");
    
    // Gửi phản hồi thành công về client
    res.json({ message: "Cấu hình Database và phpmyadmin đã được lưu." });
  } catch (error) {
    console.error("Lỗi khi lưu cấu hình:", error);
    res.status(500).json({ error: "Không thể lưu cấu hình." });
  }
});




// Route để lấy thông tin GitHub từ .env
app.get('/get-github-credentials', (req, res) => {
  res.json({
    username: GITHUB_USERNAME,
    token: GITHUB_TOKEN
  });
});



// Đọc thông tin từ .env
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GIT_USER_EMAIL = process.env.GMAIL; // Đảm bảo rằng bạn có `GMAIL` trong .env để làm email Git

// Route để upload mã nguồn lên GitHub
app.post('/upload-code-to-github', async (req, res) => {
  const { repoName } = req.body;

  try {
    // Sử dụng Octokit có cấu hình `auth` từ biến môi trường
    const octokit = new Octokit({ auth: GITHUB_TOKEN });

    // Kiểm tra xem repository có tồn tại không
    const { data: repo } = await octokit.repos.get({
      owner: GITHUB_USERNAME,
      repo: repoName,
    });

    if (!repo) {
      return res.status(404).json({ error: "Repository không tồn tại." });
    }

    const git = simpleGit();
    const repoDir = path.join(__dirname, 'repos', repoName);
    const gitDir = path.join(repoDir, '.git');

    // Kiểm tra và khởi tạo Git repository nếu cần
    if (!fs.existsSync(gitDir)) {
      console.log(`Thư mục ${repoDir} không phải là một Git repository. Đang khởi tạo Git repository...`);
      await git.cwd(repoDir);
      await git.init();
      console.log("Đã khởi tạo Git repository trong thư mục:", repoDir);
    }

    await git.cwd(repoDir);

    // Thiết lập tên và email tác giả
    await git.addConfig('user.name', GITHUB_USERNAME);
    await git.addConfig('user.email', GIT_USER_EMAIL);

    // Kiểm tra và tạo nhánh `main` nếu chưa có
    const branches = await git.branch();
    if (!branches.all.includes('main')) {
      console.log("Nhánh 'main' không tồn tại, đang tạo nhánh 'main'...");
      await git.checkoutLocalBranch('main');
    }

    // Kiểm tra và thêm remote 'origin' với xác thực qua token
    const remotes = await git.getRemotes();
    if (!remotes.some(remote => remote.name === 'origin')) {
      console.log("Remote 'origin' chưa được cấu hình. Đang thêm remote 'origin' với token...");
      const remoteUrl = `https://${GITHUB_USERNAME}:${GITHUB_TOKEN}@github.com/${GITHUB_USERNAME}/${repoName}.git`;
      await git.addRemote('origin', remoteUrl);
    }

    try {
      // Kéo các thay đổi từ nhánh `main` trên GitHub
      await git.pull('origin', 'main', ['--allow-unrelated-histories']);
    } catch (pullError) {
      if (pullError.message.includes('merge conflict')) {
        return res.status(400).json({ error: "Đã xảy ra xung đột khi kéo dữ liệu từ GitHub. Vui lòng giải quyết xung đột trước." });
      }
      throw pullError;
    }

    // Xóa tất cả các file trong repository trước khi upload file mới
    const files = await git.raw(['ls-tree', '-r', '--name-only', 'HEAD']);
    const fileList = files.split('\n').filter(file => file !== '');
    
    // Xóa tất cả file
    for (const file of fileList) {
      await git.rm(file);
    }

    // Thêm tất cả file mới vào Git
    await git.add('.');

    // Commit thay đổi và đẩy lên GitHub
    await git.commit('Cập nhật mã nguồn và xóa file cũ');
    await git.push('origin', 'main');

    res.json({ message: `Mã nguồn đã được upload lên GitHub repository ${repoName}` });
  } catch (error) {
    console.error("Lỗi khi upload mã nguồn lên GitHub:", error);
    res.status(500).json({ error: 'Đã xảy ra lỗi khi upload mã nguồn lên GitHub.' });
  }
});



app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
