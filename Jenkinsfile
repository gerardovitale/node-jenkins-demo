node {
    def commit_id
    stage('Preparation') {
     checkout scm
     sh "git rev-parse --short HEAD > .git/commit-id"
     commit_id = readFile('.git/commit-id').trim()
    }

   stage('test') {
     def myTestContainer = docker.image('node:latest')
     myTestContainer.pull()
     myTestContainer.inside {
       sh 'npm ci'
       sh 'npm install --only=dev'
       sh 'npm link'
       sh 'npm test'
     }
   }

   stage('docker build/push') {
     docker.withRegistry('https://index.docker.io/v2/', 'dockerhub') {
       def app = docker.build("gerardovitale/docker-nodejs-demo:${commit_id}", '.').push()
     }
   }
}