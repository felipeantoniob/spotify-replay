/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  // serverBuildPath: "build/index.js",
  serverDependenciesToBundle: [
    "@spotify-replay/store",
    "@spotify-replay/tsconfig",
    "@spotify-replay/tailwind-config",
    "@spotify-replay/ui/src/components/ui/Button/Button",
    "@spotify-replay/ui/src/components/common/Icon/Icon",
    "@spotify-replay/ui/src/components/common/ReplayLogo/ReplayLogo",
  ],
};
