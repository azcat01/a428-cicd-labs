// Declarative Pipeline is recommended if Jenkins pipeline is running for the first time

// Declarative Pipeline //

// pipeline {
//     agent {
//         docker {
//             image 'node:16-buster-slim' 
//             args '-p 80:80' 
//         }
//     }
//     stages {
//         stage('Build') { 
//             steps {
//                 sh 'npm install' 
//             }
//         }
//         stage('Test') {
//             steps {
//                 sh './jenkins/scripts/test.sh'
//             }
//         }
//         stage('Manual Approval') {
//             steps {
//                 input message:  "Lanjutkan ke tahap Deploy?"
//             }
//         }
//         stage('Deploy Local') {
//             steps {
//                 sh './jenkins/scripts/deliver.sh'
//                 // input message: 'Sudah selesai menggunakan React App? (Klik "Proceed" untuk mengakhiri)'
//                 sleep(time: 1, unit: 'MINUTES')
//                 sh './jenkins/scripts/kill.sh'
//             }
//         }
//         stage('Deploy AWS') {
//             steps {
//                 withAWS(credentials: 'react-app-server', region:'ap-southeast-1') {
//                     createDeployment(
//                         gitHubRepository: 'azcat01/a428-cicd-labs',
//                         gitHubCommitId: '5bf49b9769305aebd5186ca4f4e65df94ec6a8c7',
//                         applicationName: 'react-app',
//                         deploymentGroupName: 'CodeDeploy-react-app',
//                         deploymentConfigName: 'CodeDeployDefault.AllAtOnce',
//                         description: 'Deployment from Jenkins Local',
//                         waitForCompletion: 'true'
//                     )
//                 }
//             }
//         }
//     }
// }

// Scripted Pipeline //

node {
    docker.image('node:16-buster-slim').inside('-p 80:80') {
        stage('Build') { 
            sh 'npm install' 
        }
        stage('Test') {
            sh './jenkins/scripts/test.sh'
        }
        stage('Manual Approval') {
            input(message: 'Lanjutkan ke tahap Deploy?')
        }
        stage('Deploy Local') {
            sh './jenkins/scripts/deliver.sh'
            // input(message: 'Sudah selesai menggunakan React App? (Klik "Proceed" untuk mengakhiri)')
            sleep(time: 1, unit: 'MINUTES')
            sh './jenkins/scripts/kill.sh'
        }
        stage('Deploy AWS') {
            withAWS(credentials: 'react-app-server', region:'ap-southeast-1') {
                createDeployment(
                    gitHubRepository: 'azcat01/a428-cicd-labs',
                    gitHubCommitId: '333a6597d75749b03c60814d1c6e37c6271bc704',
                    applicationName: 'react-app',
                    deploymentGroupName: 'CodeDeploy-react-app',
                    deploymentConfigName: 'CodeDeployDefault.AllAtOnce',
                    description: 'Deployment from Jenkins Local',
                    waitForCompletion: 'true'
                )
            }
        }
    }
}