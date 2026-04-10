export default {
  'dns-orchestrator': {
    id: 'dns-orchestrator',

    tags: ['Tauri', 'React', 'Rust', 'TypeScript', 'DNS', 'Desktop App', 'Cross-Platform'],

    githubUrl: 'https://github.com/AptS-1547/dns-orchestrator',

    language: 'TypeScript',

    status: 'active',

    license: 'MIT',
    title: 'DNS Orchestrator - DNS 统一管理平台',
    description: '跨平台桌面应用，统一管理多个 DNS 服务商的域名解析记录',
    longDescription:
      'DNS Orchestrator 是一个跨平台桌面应用程序，用于统一管理多个 DNS 服务商的域名解析记录。支持 Cloudflare、阿里云 DNS、腾讯云 DNSPod、华为云 DNS 等主流服务商，提供安全的凭证存储、高级搜索过滤、账户导入导出以及内置网络工具箱等功能。',
    features: [
      '多账户管理，安全存储凭证到系统密钥链',
      '统一管理多个 DNS 服务商的解析记录',
      '支持 Cloudflare、阿里云、腾讯云、华为云',
      '高级搜索过滤和无限滚动分页',
      '加密的账户配置导入导出',
      '内置 DNS 查询和 WHOIS 工具箱',
      '深色/浅色主题切换',
      '中英双语界面',
      '跨平台支持（macOS、Windows、Linux）',
    ],
    techStack: [
      {
        name: 'frontend',
        items: [
          { name: 'React 19', purpose: '现代化 UI 框架' },
          { name: 'TypeScript 5', purpose: '类型安全开发' },
          { name: 'Tailwind CSS 4', purpose: '实用优先的样式系统' },
          { name: 'Radix UI', purpose: '无障碍 UI 组件库' },
          { name: 'Zustand 5', purpose: '轻量级状态管理' },
          { name: 'i18next', purpose: '国际化支持' },
        ],
      },
      {
        name: 'backend',
        items: [
          { name: 'Tauri 2', purpose: '跨平台桌面应用框架' },
          { name: 'Rust', purpose: '高性能后端核心' },
          { name: 'Tokio', purpose: '异步运行时' },
          { name: 'keyring', purpose: '系统密钥链集成' },
        ],
      },
      {
        name: 'tools',
        items: [
          { name: 'Vite 7', purpose: '快速构建工具' },
          { name: 'pnpm', purpose: '高效包管理器' },
          { name: 'GitHub Actions', purpose: 'CI/CD 和多平台构建' },
        ],
      },
    ],
  },

  'gcop-rs': {
    id: 'gcop-rs',

    tags: ['Rust', 'Git', 'AI', 'CLI', 'Code Review', 'LLM'],

    githubUrl: 'https://github.com/AptS-1547/gcop-rs',

    language: 'Rust',

    status: 'active',

    license: 'MIT',
    title: 'gcop-rs - AI Git 助手',
    description: '使用 Rust 编写的 AI 驱动 Git 提交信息生成器和代码审查工具',
    longDescription:
      'gcop-rs 是一个使用 Rust 编写的 AI 驱动 Git 提交信息生成器和代码审查工具。这是原始 gcop 项目（Python）的 Rust 重写版本，提供更好的性能、可靠性和可维护性。支持 Claude、OpenAI 和 Ollama 等多种 LLM 提供商，具有便捷的 Git 别名、自定义提示词和灵活的配置选项。',
    features: [
      '使用 Claude、OpenAI 或 Ollama 生成规范的提交信息',
      'AI 驱动的代码审查，提供安全性和性能洞察',
      '便捷的 Git 别名（git c、git r、git acp）简化工作流',
      '交互式 init 命令快速配置',
      '支持任何 OpenAI/Claude 兼容 API（DeepSeek 等）',
      '使用模板变量自定义生成和审查提示词',
      '通过文件或环境变量灵活配置',
      '美观的 CLI 界面，带有加载动画和彩色输出',
      '调试模式，提供完整的请求/响应日志',
      '完整支持 GPG 提交签名',
    ],
    techStack: [
      {
        name: 'backend',
        items: [
          { name: 'Rust', purpose: '高性能核心语言' },
          { name: 'Tokio', purpose: '异步运行时' },
          { name: 'Clap', purpose: 'CLI 参数解析框架' },
          { name: 'Reqwest', purpose: 'HTTP 客户端' },
          { name: 'git2', purpose: 'Git 操作库' },
        ],
      },
      {
        name: 'tools',
        items: [
          { name: 'Cargo', purpose: 'Rust 包管理和构建' },
          { name: 'GitHub Actions', purpose: 'CI/CD 流水线' },
          { name: 'crates.io', purpose: 'Rust 包发布平台' },
        ],
      },
    ],
  },

  shortlinker: {
    id: 'shortlinker',

    tags: ['Rust', 'Actix-web', 'SQLite', 'Docker', 'High-Performance'],

    githubUrl: 'https://github.com/AptS-1547/shortlinker',

    language: 'Rust',

    status: 'active',

    license: 'MIT',
    title: 'ShortLinker - 短链接服务',
    description: '基于 Rust 和 Actix-web 构建的高性能 URL 短链接服务',
    longDescription:
      'ShortLinker 是一个使用 Rust 和 Actix-web 从零构建的简约而强大的短链接服务。专为最大性能和可靠性而设计，支持 HTTP 307 重定向，并通过智能缓存策略和布隆过滤器实现卓越的吞吐量。',
    features: [
      'HTTP 307 重定向，提升 SEO 和用户体验',
      '通过优化的缓存层实现 70 万+ QPS',
      '布隆过滤器用于高效的 URL 存在性检查',
      '支持 SQLite 和 JSON 双存储后端',
      '内置管理 API 用于 URL 管理',
      '可配置的 URL 过期支持',
      '使用 Docker 跨平台部署',
      '最小内存占用和快速启动',
    ],
    techStack: [
      {
        name: 'backend',
        items: [
          { name: 'Rust', purpose: '性能优先的核心语言' },
          { name: 'Actix-web', purpose: '高性能 Web 框架' },
          { name: 'SQLite', purpose: '嵌入式数据库持久化' },
          { name: 'Bloom Filter', purpose: '高效的 URL 存在性检查' },
        ],
      },
      {
        name: 'tools',
        items: [
          { name: 'Docker', purpose: '容器化和部署' },
          { name: 'GitHub Actions', purpose: 'CI/CD 流水线' },
          { name: 'Cargo', purpose: '包管理和构建' },
        ],
      },
    ],
    performance: [
      { name: 'QPS', value: '70万+' },
      { name: '内存使用', value: '<50MB' },
      { name: '启动时间', value: '<100ms' },
    ],
  },

  'aster-drive': {
    id: 'aster-drive',

    tags: ['Rust', 'React', 'Self-Hosted', 'Cloud Storage', 'WebDAV', 'S3', 'SQLite'],

    githubUrl: 'https://github.com/AptS-1547/AsterDrive',

    language: 'Rust',

    status: 'active',

    license: 'MIT',
    title: 'AsterDrive - 自托管云存储系统',
    description: '基于 Rust 和 React 构建的自托管云存储系统',
    longDescription:
      'AsterDrive 是一个基于 Rust 和 React 构建的自托管云存储系统，采用单二进制交付模式，将前端面板直接嵌入服务端。项目支持多数据库、可插拔存储策略、WebDAV、公开分享、版本历史、回收站、缩略图与四种上传模式，目标是提供一套兼顾部署简洁性、扩展能力与文件协作体验的现代化存储方案。',
    features: [
      '单二进制交付，前端资源通过 rust-embed 嵌入 Rust 服务端',
      '默认支持 SQLite，并可切换到 MySQL 或 PostgreSQL',
      '支持本地文件系统与 S3 兼容对象存储的可插拔存储策略',
      '提供 direct、chunked、presigned、presigned_multipart 四种上传模式',
      '支持文件与文件夹分享、密码保护、过期时间和下载次数限制',
      '内置 WebDAV 账号、根目录限制、数据库锁和 DeltaV 子集支持',
      '包含版本历史、回收站、缩略图、资源锁和周期清理任务',
      '提供覆盖用户、策略、运行时配置、分享、锁与审计日志的管理后台',
    ],
    techStack: [
      {
        name: 'frontend',
        items: [
          { name: 'React 19', purpose: '文件面板与管理界面' },
          { name: 'TypeScript', purpose: '前端类型安全开发' },
          { name: 'Tailwind CSS 4', purpose: '实用优先的样式系统' },
          { name: 'react-router-dom 7', purpose: '前端路由与页面导航' },
          { name: 'i18next', purpose: '多语言界面支持' },
        ],
      },
      {
        name: 'backend',
        items: [
          { name: 'Rust', purpose: '高性能后端核心' },
          { name: 'Actix-web 4', purpose: 'HTTP API 与文件服务框架' },
          { name: 'SeaORM 2', purpose: '多数据库 ORM 层' },
          { name: 'Tokio', purpose: '异步运行时' },
          { name: 'dav-server', purpose: 'WebDAV 与 DeltaV 子集支持' },
        ],
      },
      {
        name: 'tools',
        items: [
          { name: 'Vite 8', purpose: '前端构建工具' },
          { name: 'Bun', purpose: '前端依赖管理与脚本运行' },
          { name: 'Docker', purpose: '容器化与 Alpine 部署' },
          { name: 'Biome', purpose: '前端检查与格式化' },
          { name: 'Vitest', purpose: '前端测试' },
        ],
      },
    ],
  },

  'ferrus-gate': {
    id: 'ferrus-gate',

    tags: ['Rust', 'OAuth2', 'OIDC', 'SAML', 'FIDO2', 'Authentication'],

    githubUrl: 'https://github.com/FerrusGate/FerrusGate',

    language: 'Rust',

    status: 'in-development',

    license: 'MIT',
    title: 'Ferrus Gate - 身份网关',
    description: '支持 OAuth2、OIDC、SAML 和 FIDO2 的现代身份网关',
    longDescription:
      'Ferrus Gate 是一个使用 Rust 构建的综合性身份网关解决方案，旨在为分布式系统提供统一的认证入口和账户管理。支持多种认证协议，包括 OAuth2、OpenID Connect、SAML 和现代的 FIDO2/WebAuthn 标准。',
    features: [
      '多协议支持（OAuth2、OIDC、SAML、FIDO2）',
      'FIDO2/WebAuthn 无密码认证',
      '面向企业部署的多租户架构',
      '可插拔的认证提供者',
      '多因素认证（MFA）支持',
      '会话管理和 SSO 功能',
      '用于用户和租户管理的管理面板',
      'API 优先设计，提供完整的 REST API',
    ],
    techStack: [
      {
        name: 'backend',
        items: [
          { name: 'Rust', purpose: '核心系统实现' },
          { name: 'Actix-web', purpose: '现代异步 Web 框架' },
          { name: 'PostgreSQL', purpose: '主要数据存储' },
          { name: 'Redis', purpose: '会话和缓存管理' },
        ],
      },
      {
        name: 'frontend',
        items: [
          { name: 'Vue.js 3', purpose: '管理面板前端' },
          { name: 'TypeScript', purpose: '类型安全开发' },
          { name: 'Tailwind CSS', purpose: '实用优先的样式' },
        ],
      },
      {
        name: 'tools',
        items: [
          { name: 'Docker Compose', purpose: '本地开发环境' },
          { name: 'Kubernetes', purpose: '生产环境部署' },
          { name: 'OpenAPI', purpose: 'API 文档' },
        ],
      },
    ],
  },

  nebulink: {
    id: 'nebulink',

    tags: ['Rust', 'Actix-web', 'CDN', 'Distributed System', 'Load Balancing'],

    githubUrl: 'https://github.com/AptS-1547/Nebulink',

    language: 'Rust',

    status: 'planned',

    license: 'Apache-2.0',
    title: 'Nebulink - 分布式加速平台',
    description: '基于全球云节点的分布式加速管理平台',
    longDescription:
      'Nebulink 是一个基于全球云节点的分布式加速管理平台，致力于构建高效、灵活且可扩展的 CDN 控制系统。旨在将全球节点编织成星云，通过智能路由和负载均衡加速服务。',
    features: [
      '全球节点注册和心跳监控',
      '多节点延迟检测和负载均衡',
      '智能路由和加速逻辑',
      '配置中心与管理 API',
      '实时监控和状态报告（计划中）',
      '安全机制（计划中）',
      '分布式系统架构',
      '高性能 CDN 控制系统',
    ],
    techStack: [
      {
        name: 'backend',
        items: [
          { name: 'Rust', purpose: '性能优先的核心系统实现' },
          { name: 'Actix-web', purpose: '高性能异步 Web 框架' },
        ],
      },
      {
        name: 'tools',
        items: [
          { name: 'Cargo', purpose: 'Rust 包管理和构建' },
          { name: 'GitHub', purpose: '版本控制和协作' },
        ],
      },
    ],
  },

  'sled-gui': {
    id: 'sled-gui',

    tags: ['Tauri', 'Rust', 'Vue.js', 'TypeScript', 'Sled', 'Desktop App'],

    githubUrl: 'https://github.com/AptS-1547/sled-gui',

    language: 'Rust',

    status: 'planned',

    license: 'MIT',
    title: 'Sled GUI - 数据库可视化管理器',
    description: '基于 Tauri 构建的 Sled 键值数据库可视化管理器',
    longDescription:
      'Sled GUI 是一个使用 Tauri 构建的现代桌面应用程序，为管理 Sled 嵌入式键值数据库提供可视化界面。结合 Rust 后端的性能和安全性与现代 Web 技术的灵活性，为开发者提供了一种直观的方式来浏览、编辑和管理 Sled 数据库条目，无需直接操作文件。该应用利用 Tauri 的独特架构，以 Web UI 的灵活性提供原生性能。',
    features: [
      'Tauri Rust 核心提供的原生桌面性能',
      '使用 Vue 3 和 TypeScript 构建的现代 Web UI',
      '与 Sled 嵌入式数据库直接集成',
      '实时数据库浏览和键值管理',
      '跨平台支持（Windows、macOS、Linux）',
      '通过 Tauri API 安全的文件系统访问',
      'Tauri 优化带来的轻量级打包体积',
      '热重载开发体验',
    ],
    techStack: [
      {
        name: 'backend',
        items: [
          { name: 'Rust', purpose: '核心应用逻辑和 Tauri 后端' },
          { name: 'Tauri', purpose: '桌面应用框架和系统 API' },
          { name: 'Sled', purpose: '嵌入式键值数据库集成' },
          { name: 'tokio', purpose: '数据库操作的异步运行时' },
        ],
      },
      {
        name: 'frontend',
        items: [
          { name: 'Vue 3', purpose: '响应式 UI 框架与 Composition API' },
          { name: 'TypeScript', purpose: '类型安全的前端开发' },
          { name: 'Tailwind CSS', purpose: '实用优先的样式系统' },
          { name: 'Vite', purpose: '为 Tauri 优化的快速构建工具' },
        ],
      },
      {
        name: 'tools',
        items: [
          { name: 'Tauri CLI', purpose: '构建和开发工具链' },
          { name: 'Cargo', purpose: 'Rust 包管理' },
          { name: 'ESLint + Prettier', purpose: '代码质量和格式化' },
        ],
      },
    ],
  },

  'onebot-github-webhook': {
    id: 'onebot-github-webhook',

    tags: ['Python', 'FastAPI', 'OneBot', 'GitHub API', 'WebSocket', 'Docker'],

    githubUrl: 'https://github.com/AptS-1547/onebot-github-webhook',

    language: 'Python',

    status: 'active',

    license: 'Apache-2.0',
    title: 'OneBot GitHub Webhook - QQ 通知服务',
    description: '通过 OneBot 协议将 GitHub Webhook 推送到 QQ 的通知服务',
    longDescription:
      'OneBot GitHub Webhook 是一个强大的服务，通过 OneBot 协议将 GitHub Webhook 桥接到 QQ 群。它提供了 GitHub 仓库和 QQ 群之间的无缝集成，实现代码更改、Issues、Pull Requests 和 Releases 的实时通知。该服务具有高级模式匹配、安全的 Webhook 验证和灵活的配置选项。',
    features: [
      '安全的 GitHub Webhook 签名验证',
      'OneBot 协议支持（WebSocket 和 HTTP）',
      '支持通配符的高级仓库和分支匹配',
      '灵活的事件过滤（push、PR、issues、releases）',
      '可定制的消息格式和模板',
      '多群和多机器人支持',
      'Docker 容器化便于部署',
      '全面的日志记录和错误处理',
      '计划中：私有仓库的 GitHub API 轮询',
      '计划中：自定义 Jinja2 模板系统',
    ],
    techStack: [
      {
        name: 'backend',
        items: [
          { name: 'Python 3.8+', purpose: '核心编程语言' },
          { name: 'FastAPI', purpose: '高性能异步 Web 框架' },
          { name: 'Uvicorn', purpose: '生产环境 ASGI 服务器' },
          { name: 'Pydantic', purpose: '数据验证和设置管理' },
          { name: 'aiohttp', purpose: 'OneBot 通信的异步 HTTP 客户端' },
          { name: 'PyYAML', purpose: '配置文件解析' },
        ],
      },
      {
        name: 'tools',
        items: [
          { name: 'Docker', purpose: '容器化和部署' },
          { name: 'GitHub Actions', purpose: 'CI/CD 流水线' },
          { name: 'Poetry', purpose: 'Python 依赖管理' },
          { name: 'pytest', purpose: '单元测试框架' },
        ],
      },
    ],
    performance: [
      { name: '响应时间', value: '<100ms' },
      { name: '内存使用', value: '<100MB' },
      { name: '事件处理', value: '1000+/分钟' },
    ],
  },

  'vue-portfolio': {
    id: 'vue-portfolio',

    tags: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'Responsive', 'Portfolio'],

    githubUrl: 'https://github.com/AptS-1547/VUE-About-Me',

    language: 'TypeScript',

    status: 'active',

    license: 'MIT',
    title: 'Vue Portfolio - 个人作品集',
    description: '使用 Vue.js 和现代设计构建的个人作品集网站',
    longDescription:
      '一个响应式的现代个人作品集网站，展示项目、技能和专业经验。使用 Vue.js 3、TypeScript 和 Tailwind CSS 构建，具有流畅的动画、响应式设计和优化的性能。',
    features: [
      '所有设备尺寸的完全响应式设计',
      '流畅的滚动动画和过渡',
      '带有筛选功能的项目展示',
      '技能和专长可视化',
      '专业经历时间线',
      '带验证的联系表单',
      '使用 meta 标签进行 SEO 优化',
      '图片懒加载实现快速加载',
    ],
    techStack: [
      {
        name: 'frontend',
        items: [
          { name: 'Vue.js 3', purpose: '渐进式 Web 框架' },
          { name: 'TypeScript', purpose: '类型安全和更好的开发体验' },
          { name: 'Tailwind CSS', purpose: '实用优先的 CSS 框架' },
          { name: 'Vue Router', purpose: '客户端路由' },
        ],
      },
      {
        name: 'tools',
        items: [
          { name: 'Vite', purpose: '快速构建工具和开发服务器' },
          { name: 'ESLint', purpose: '代码检查和格式化' },
          { name: 'Prettier', purpose: '代码格式化' },
        ],
      },
    ],
  },

  'wakatime-readme-updater': {
    id: 'wakatime-readme-updater',

    tags: ['Rust', 'WakaTime', 'GitHub Actions', 'Docker', 'Automation'],

    githubUrl: 'https://github.com/AptS-1547/wakatime-readme-updater',

    language: 'Rust',

    status: 'active',

    license: 'MIT',
    title: 'WakaTime README Updater - 统计集成工具',
    description: '自动将 WakaTime 编码统计集成到 GitHub README',
    longDescription:
      '一个高性能的 Rust 工具，可自动将 WakaTime 编码统计集成到 GitHub README 文件中。这是对早期 Python 实现的完全重写，提供极快的性能、内存安全和无运行时依赖的单一二进制文件。支持灵活的部署选项，包括 GitHub Actions、Docker 和独立 CLI。',
    features: [
      '内存安全且极快的 Rust 实现',
      '无运行时依赖的单一二进制文件',
      '灵活的部署：GitHub Actions、Docker 或 CLI',
      '多种配置方法：CLI 参数、环境变量或 TOML',
      '带智能认证的自动化 Git 工作流',
      '可定制的统计显示（语言、编辑器、操作系统）',
      '可配置的统计收集时间范围',
      '小型二进制占用，高效集成 CI/CD',
    ],
    techStack: [
      {
        name: 'backend',
        items: [
          { name: 'Rust 1.90+', purpose: '性能和安全的核心语言' },
          { name: 'WakaTime API', purpose: '编码统计数据源' },
          { name: 'GitHub API', purpose: '仓库管理和更新' },
        ],
      },
      {
        name: 'tools',
        items: [
          { name: 'Docker', purpose: '灵活部署的容器化' },
          { name: 'GitHub Actions', purpose: '自动化 README 更新' },
          { name: 'Cargo', purpose: 'Rust 包管理和构建' },
        ],
      },
    ],
  },

  'nginx-modsecurity': {
    id: 'nginx-modsecurity',

    tags: ['Docker', 'Nginx', 'ModSecurity', 'WAF', 'Security', 'Alpine'],

    githubUrl: 'https://github.com/AptS-1547/nginx-modsecurity',

    language: 'Dockerfile',

    status: 'active',

    license: 'MIT',
    title: 'Nginx with ModSecurity - 企业级 WAF',
    description: '集成 Nginx 和 OWASP ModSecurity 的企业级 WAF Docker 镜像',
    longDescription:
      '一个轻量而强大的 Docker 镜像，结合 Nginx 和 OWASP ModSecurity Web 应用防火墙，为现代 Web 应用提供企业级保护。基于 Alpine Linux 构建并进行安全加固，提供多架构支持和完整的依赖项以实现强大的安全功能。',
    features: [
      '最新的 Nginx 1.28.0 和 ModSecurity v3.0.14',
      '轻量级 Alpine Linux 基础（约 60MB）',
      '多架构支持（AMD64 和 ARM64）',
      'ModSecurity 编译为动态模块',
      '完整依赖：Lua 5.4、LMDB、YAJL、GeoIP',
      '防御 OWASP Top 10 威胁',
      '多阶段构建减少攻击面',
      '使用 GitHub Actions 自动化 CI/CD',
    ],
    techStack: [
      {
        name: 'infrastructure',
        items: [
          { name: 'Nginx 1.28.0', purpose: '高性能 Web 服务器' },
          { name: 'ModSecurity v3.0.14', purpose: 'OWASP WAF 引擎' },
          { name: 'Alpine Linux', purpose: '轻量级且安全的基础镜像' },
          { name: 'Lua 5.4', purpose: '高级规则的脚本支持' },
        ],
      },
      {
        name: 'tools',
        items: [
          { name: 'Docker', purpose: '容器化和部署' },
          { name: 'GitHub Actions', purpose: '自动化构建和发布' },
          { name: 'Multi-stage builds', purpose: '优化镜像大小和安全性' },
        ],
      },
    ],
    performance: [
      { name: '镜像大小', value: '约 60MB' },
      { name: '架构支持', value: 'AMD64 + ARM64' },
    ],
  },

  'acme-docker-reloader': {
    id: 'acme-docker-reloader',

    tags: ['Shell', 'Docker', 'acme.sh', 'SSL', 'Automation', 'systemd'],

    githubUrl: 'https://github.com/AptS-1547/acme-docker-reloader',

    language: 'Shell',

    status: 'active',

    license: 'MIT',
    title: 'ACME Docker Reloader - SSL 自动化工具',
    description: 'Docker 容器的自动 SSL 证书续期和服务重载',
    longDescription:
      '一个智能自动化解决方案，使在 Docker 容器中运行的 acme.sh 能够自动请求和续期 SSL 证书，然后在证书更新时无缝重载主机或容器服务（如 Nginx 或 Caddy）。具有基于套接字的 IPC、全面的错误处理和开箱即用的可用性。',
    features: [
      '三步设置即可开箱即用',
      '容器化的 acme.sh 自动续期',
      '基于套接字的进程间通信',
      '多服务支持配置',
      '自动服务重载（Nginx、Caddy 等）',
      '全面的错误处理和日志记录',
      '简单的基于 YAML 的配置',
      'systemd 服务集成',
    ],
    techStack: [
      {
        name: 'automation',
        items: [
          { name: 'Shell Script', purpose: '核心自动化逻辑' },
          { name: 'acme.sh', purpose: 'ACME 协议 SSL 证书管理' },
          { name: 'systemd', purpose: '服务管理和守护进程' },
        ],
      },
      {
        name: 'tools',
        items: [
          { name: 'Docker', purpose: '容器编排' },
          { name: 'Docker Compose', purpose: '多容器设置' },
          { name: 'Unix Sockets', purpose: '主机-容器通信' },
        ],
      },
    ],
  },

  'aster-pulse': {
    id: 'aster-pulse',

    tags: ['Rust', 'Distributed System', 'Monitoring', 'Uptime', 'Network'],

    githubUrl: 'https://github.com/AptS-1547/AsterPulse',

    language: 'Rust',

    status: 'planned',

    license: 'Apache-2.0',
    title: 'AsterPulse - 分布式在线监控系统',
    description: '一个分布式在线监控系统',
    longDescription:
      'AsterPulse 是一个规划中的分布式在线监控系统，目标是在全球分布式节点之间跟踪互联网连通性和服务可用性。根据当前 GitHub 仓库的官方描述，这个项目目前定位为 uptime monitoring system，整体仍处于比较早期的阶段。',
    features: [
      '分布式在线监控架构（计划中）',
      '跨多节点的服务可用性检查（计划中）',
      '互联网连通性与健康信号跟踪（计划中）',
      '早期阶段的监控平台探索',
    ],
  },
}
