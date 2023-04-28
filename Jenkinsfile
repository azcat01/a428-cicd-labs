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
//         stage('Deploy') {
//             steps {
//                 sh './jenkins/scripts/deliver.sh'
//                 // input message: 'Sudah selesai menggunakan React App? (Klik "Proceed" untuk mengakhiri)'
//                 sleep(time: 1, unit: 'MINUTES')
//                 sh './jenkins/scripts/kill.sh'
//             }
//         }
//     }
// }

// Scripted Pipeline //

node {
    docker.image('node:16-buster-slim').inside('-p 3000:3000') {
        stage('Build') { 
            sh 'npm install' 
        }
        stage('Test') {
            sh './jenkins/scripts/test.sh'
        }
        stage('Manual Approval') {
            input(message: 'Lanjutkan ke tahap Deploy?')
        }
        stage('Deploy') {
            sh './jenkins/scripts/deliver.sh'
            // input(message: 'Sudah selesai menggunakan React App? (Klik "Proceed" untuk mengakhiri)')
            sleep(time: 1, unit: 'MINUTES')
            sh './jenkins/scripts/kill.sh'
        }
    }
}