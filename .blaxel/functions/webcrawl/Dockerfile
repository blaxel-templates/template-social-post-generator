

FROM node:22-slim

# Install necessary dependencies, toolkit, then clean up
RUN apt update && apt install -y curl     && curl -fsSL https://raw.githubusercontent.com/beamlit/toolkit/main/install.sh | BINDIR=/bin sh     && apt-get remove -y curl     && apt-get autoremove -y     && apt-get clean     && rm -rf /var/lib/apt/lists/*

WORKDIR /blaxel

# Copy dependency files first to leverage Docker cache
COPY package.json pnpm-lock.yam[l] ./
RUN npx pnpm install

# Copy source files (conditional and required)
COPY README.m[d] LICENS[E] tsconfig.jso[n] ./
COPY src ./src
COPY index.t[s] ./

# Build the application and clean up afterwards
RUN npx pnpm run build     && cp -r dist/* /blaxel     && npx pnpm prune --prod

ENV COMMAND="node index.js"

ENTRYPOINT ["bl","serve","--port","80","--module","src.functions.webcrawl.doNotRemove"]
