runNodeApp() {
  nodeContainerRunning=$(docker ps | grep node-jenkins-app)
  if [[ $nodeContainerRunning ]]; then
    echo "[INFO] Stopping node-jenkins-app container" &&
      docker container stop node-jenkins-app
  fi

  nodeContainer=$(docker container ls --all | grep node-jenkins-app)
  if [[ $nodeContainer ]]; then
    docker container rm node-jenkins-app
  fi

  echo "[INFO] Building new node-jenkins-app container" &&
    docker build -f Dockerfile -t node-jenkins-app . || exit

  echo "[INFO] Running node-jenkins-app container" &&
    docker run -d \
      --name=node-jenkins-app \
      --network=jenkins-project_jenkins_network \
      -p 8081:8081 \
      node-jenkins-app || exit
}

runNodeApp

