FROM nginx
COPY web/*.html /usr/share/nginx/html
COPY web/*.js /usr/share/nginx/html
COPY web/*.css /usr/share/nginx/html
COPY web/*.png /usr/share/nginx/html