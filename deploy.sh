#!/bin/bash
# Manual deploy script — run as dsehgal (or any sudoer) on the VM
set -e

APP_DIR="/home/ophotech/apps/ophotech-landing-page"
SERVICE="ophotech-landing-page"

echo "==> Pulling latest code..."
sudo -u ophotech git -C "$APP_DIR" reset --hard HEAD
sudo -u ophotech git -C "$APP_DIR" clean -fd
sudo -u ophotech git -C "$APP_DIR" pull origin main

echo "==> Installing dependencies..."
sudo -u ophotech bash -c "cd $APP_DIR && npm ci"

echo "==> Building for production..."
sudo -u ophotech bash -c "cd $APP_DIR && NODE_ENV=production npm run build"

echo "==> Restarting service..."
sudo systemctl restart "$SERVICE"

sleep 3
if sudo systemctl is-active --quiet "$SERVICE"; then
  echo "==> Deploy complete. Service is running."
else
  echo "==> Service failed to start!"
  sudo journalctl -u "$SERVICE" --no-pager -n 20
  exit 1
fi
