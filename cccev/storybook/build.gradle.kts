plugins {
    id "com.github.node-gradle.node" version "3.5.1"
}

tasks.register<YarnTask>("storybook") {
    dependsOn(tasks.yarnInstall)
    yarnCommand.set(listOf("run", "storybook"))
}
