// Production start script
const { spawn } = require('child_process');

// Build and start the production server
const buildProcess = spawn('npm', ['run', 'build'], { stdio: 'inherit' });

buildProcess.on('close', (code) => {
  if (code === 0) {
    console.log('✅ Build completed successfully');
    console.log('🚀 Starting production server...');
    
    // Start the production server
    const serverProcess = spawn('node', ['dist/index.js'], { 
      stdio: 'inherit',
      env: { ...process.env, NODE_ENV: 'production' }
    });
    
    serverProcess.on('error', (err) => {
      console.error('❌ Server error:', err);
      process.exit(1);
    });
  } else {
    console.error('❌ Build failed with code:', code);
    process.exit(1);
  }
});