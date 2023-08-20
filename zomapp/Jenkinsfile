pipeline{
    agent any
    tools {nodejs "NodeJS"}
    stages{
        stage("Install"){
            steps {
                sh "npm install"
            }
        }
        stage("Build"){
            steps {
                sh "npm run build"
            }
        }
        stage("Deploy"){
            steps {
                sh "rm -rf /usr/local/var/www/react-app/build"
                sh "cp -R /Users/aakash/.jenkins/workspace/reactaug/build /usr/local/var/www/react-app/build"
            }
        }
    }
}