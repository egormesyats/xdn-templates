"use strict";

// This file was automatically added by xdn deploy.
// You should commit this file to source control.

module.exports = {
  server: {
    path: 'dist/server.js'
  },
  backends: {
    commerce: {
      domainOrIp: '{answers.origin}',
      hostHeader: '{answers.origin}'
    }
  }
}
