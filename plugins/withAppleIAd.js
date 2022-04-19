const {
  withXcodeProject,
  IOSConfig,
  createRunOncePlugin,
} = require("@expo/config-plugins");

const frameWorkToBeAdded = "iAd.framework";

const pkg = require("@sodacrew/expo-apple-search-ads-attribution/package.json");

async function addIAdFramework(config) {
  const { projectRoot } = config.modRequest;

  const xcodeProject = config.modResults;

  const projectName = IOSConfig.XcodeUtils.getProjectName(projectRoot);

  IOSConfig.XcodeUtils.addFramework({
    project: xcodeProject,
    projectName,
    framework: frameWorkToBeAdded,
  });

  return config;
}

const withAppleAds = (config) => {
  config = withXcodeProject(config, async (props) => {
    props = await addIAdFramework(props);

    return props;
  });

  return config;
};

module.exports = createRunOncePlugin(withAppleAds, pkg.name, pkg.version);
