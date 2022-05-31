# https://github.com/oracle/docker-images/blob/main/OracleLinuxDevelopers/oraclelinux8/nodejs/14-oracledb/Dockerfile

# FROM ghcr.io/oracle/oraclelinux8-instantclient:19
FROM ghcr.io/oracle/oraclelinux8-compat:8-slim

RUN dnf -y module enable nodejs:16 && \
    dnf -y install oracle-instantclient-release-el8 oraclelinux-developer-release-el8 && \
    dnf -y install oracle-instantclient-basic &&\
    dnf -y install nodejs npm && \
    rm -rf /var/cache/dnf

ENV NODE_PATH=/usr/local/lib/node_modules/

WORKDIR /user/src/app

COPY package*.json ./
RUN npm install

COPY . .

CMD tail -f /dev/null