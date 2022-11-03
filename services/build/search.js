const { getLabel } = require("../iiif/label");

exports.buildIndex = (manifests) => {
  return manifests
    .filter((manifest) => manifest?.type === "Manifest")
    .map((manifest) => {
      const { id, label, summary } = manifest;
      return {
        id: id,
        ...(label && { label: getLabel(label).join(" ") }),
        ...(summary && { summary: getLabel(summary).join(" ") }),
      };
    });
};
