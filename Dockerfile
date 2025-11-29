FROM nginx:alpine

# Hapus default config bila ingin custom (opsional)
# RUN rm /etc/nginx/conf.d/default.conf

# Copy semua file website ke direktori root Nginx
COPY ./ /usr/share/nginx/html

# Expose port 80 untuk akses HTTP
EXPOSE 80

# Nginx akan otomatis berjalan dari base image