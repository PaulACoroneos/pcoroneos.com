module.exports = function (src) {
  const content = [
    'import Post from "components/post"',
    `${src} \n`,
    "export default (props) => <Post meta={meta} {...props} />",
  ].join("\n");

  if (content.includes("{/* more */}")) {
    return this.callback(null, content.split("{/* more */}").join("\n"));
  }

  return this.callback(
    null,
    content.replace(/<!--excerpt-->.*<!--\/excerpt-->/s, "")
  );
};
