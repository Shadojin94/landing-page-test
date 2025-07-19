# Landing Page Test - React & Node.js

A modern, responsive landing page built with React and Node.js, ready for deployment on Plesk VPS.

## 🚀 Features

- **Modern Design**: Clean, professional landing page with smooth animations
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Contact Form**: Integrated backend contact form with email functionality
- **Fast Performance**: Optimized React build with efficient Node.js backend
- **Production Ready**: Configured for Plesk VPS deployment

## 🛠️ Tech Stack

### Frontend
- React 18 with TypeScript
- Modern CSS with animations
- Responsive design
- Smooth scrolling

### Backend
- Node.js with Express
- Environment configuration
- Contact form API
- CORS enabled

## 📦 Installation

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd landing-page-test
   ```

2. **Install dependencies**
   ```bash
   npm run install:all
   ```

3. **Start development servers**
   ```bash
   npm run dev
   ```

   This will start:
   - React frontend on http://localhost:3000
   - Node.js backend on http://localhost:5000

### Production Deployment

1. **Build the frontend**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

## 🚀 Plesk VPS Deployment

### Prerequisites
- Node.js 16+ installed on your VPS
- PM2 process manager
- Plesk control panel access

### Deployment Steps

1. **Upload files to your VPS**
   ```bash
   # Via SSH
   scp -r * user@your-vps:/var/www/vhosts/yourdomain.com/httpdocs/
   ```

2. **Install dependencies**
   ```bash
   cd /var/www/vhosts/yourdomain.com/httpdocs/
   npm run install:all
   ```

3. **Build the application**
   ```bash
   npm run build
   ```

4. **Start with PM2**
   ```bash
   # Install PM2 globally if not already installed
   npm install -g pm2

   # Start the application
   pm2 start server/index.js --name "landing-page"
   pm2 save
   pm2 startup
   ```

5. **Configure Plesk**
   - Go to your domain in Plesk
   - Set up Node.js application
   - Point to `server/index.js`
   - Set environment variables in Plesk

### Environment Variables

Create a `.env` file in the server directory:

```env
PORT=5000
NODE_ENV=production
EMAIL_USER=your-email@domain.com
EMAIL_PASS=your-email-password
EMAIL_TO=contact@yourdomain.com
```

## 📁 Project Structure

```
landing-page-test/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── App.tsx         # Main app component
│   │   └── index.tsx       # Entry point
│   └── public/             # Static assets
├── server/                 # Node.js backend
│   ├── index.js            # Express server
│   └── package.json        # Server dependencies
├── package.json            # Root package.json
├── .gitignore              # Git ignore rules
└── README.md               # This file
```

## 🎯 Customization

### Content
- Update text in `client/src/components/` files
- Replace images in `client/public/`
- Modify colors in CSS files

### Contact Form
- Update email configuration in `server/index.js`
- Add additional form fields as needed

### Styling
- Global styles: `client/src/App.css`
- Component styles: Individual CSS files in components

## 🔧 Available Scripts

- `npm run dev` - Start both frontend and backend in development
- `npm run build` - Build the React app for production
- `npm start` - Start the production server
- `npm run install:all` - Install all dependencies

## 📞 Support

For questions or support, please open an issue or contact us at hello@yourcompany.com
