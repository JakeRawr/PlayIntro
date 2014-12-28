name := """Simple App"""

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.11.1"

libraryDependencies ++= Seq(
  "org.webjars" %% "webjars-play" % "2.3.0-2",
  "org.webjars" % "angularjs" % "1.3.8",
  "org.webjars" % "bootstrap" % "2.3.2",
  jdbc,
  anorm,
  cache,
  ws
)
