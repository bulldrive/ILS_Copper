# our base image
FROM nginx

ENV foo /usr/share/nginx/html/

# copy our application code
COPY . $foo
WORKDIR ${foo}
