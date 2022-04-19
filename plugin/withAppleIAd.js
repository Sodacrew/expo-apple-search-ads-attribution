const {
  withXcodeProject,
  IOSConfig,
  createRunOncePlugin,
} = require('@expo/config-plugins');

const frameWorkToBeAdded = ['iAd.framework'];

const pkg = require('expo-apple-search-ads-attribution/package.json');

async function addIAdFramework(config) {
  const { projectRoot } = config.modRequest;

  const xcodeProject = config.modResults;

  const projectName = IOSConfig.XcodeUtils.getProjectName(projectRoot);

  frameWorkToBeAdded.forEach((framework) => {
    IOSConfig.XcodeUtils.addFramework({
      project: xcodeProject,
      projectName,
      framework,
    });
  });
  return config;
}

const withAppleIAd = (config) => {
  config = withXcodeProject(config, async (props) => {
    props = await addIAdFramework(props);

    return props;
  });

  return config;
};

module.exports = createRunOncePlugin(withAppleIAd, pkg.name, pkg.version);
