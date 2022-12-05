plugins {
    id("city.smartb.fixers.gradle.kotlin.mpp")
    kotlin("plugin.spring")
    kotlin("kapt")
}

dependencies {
    Dependencies.Jvm.f2(::jvmImplementation)
    Dependencies.Jvm.fs(::jvmImplementation)
    Dependencies.Jvm.jackson(::jvmApi)
    Dependencies.Mpp.im(::commonMainApi)
    Dependencies.Mpp.s2(::commonMainApi)

    jvmApi("city.smartb.s2:s2-spring-boot-starter-utils-logger:${Versions.s2}")
    jvmImplementation("city.smartb.i2:i2-spring-boot-starter-auth:${Versions.i2}")

    jvmImplementation("com.itextpdf:html2pdf:${Versions.html2pdf}")

    jvmApi("org.apache.commons:commons-csv:${Versions.apacheCsv}")
}
