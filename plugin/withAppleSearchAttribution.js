const {
  withXcodeProject,
  IOSConfig,
  createRunOncePlugin,
} = require('@expo/config-plugins');

const frameWorksToAdd = ['iAd.framework', 'AdServices.framework'];

const pkg = require('../package.json');

async function addFramworks(config) {
  const { projectRoot } = config.modRequest;

  const xcodeProject = config.modResults;

  const projectName = IOSConfig.XcodeUtils.getProjectName(projectRoot);

  frameWorksToAdd.forEach((frameWorkToAdd) => {
    IOSConfig.XcodeUtils.addFramework({
      project: xcodeProject,
      projectName,
      framework: frameWorkToAdd,
    });
  });

  return config;
}

const withAppleSearchAttribution = (config) => {
  config = withXcodeProject(config, async (props) => {
    props = await addFramworks(props);

    return props;
  });

  return config;
};

module.exports = createRunOncePlugin(
  withAppleSearchAttribution,
  pkg.name,
  pkg.version
);
