/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => HtmlLocalSrcPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
console.log("Running on sample img");
var HtmlLocalSrcPlugin = class extends import_obsidian.Plugin {
  onload() {
    return __async(this, null, function* () {
      this.registerMarkdownPostProcessor((element, ctx) => {
        const active_file = this.app.workspace.getActiveFile();
        console.log(active_file.basename);
        const targetLinks = Array.from(element.getElementsByTagName("img")).filter((link) => link.src.contains(active_file.basename));
        let active_path = this.app.vault.getResourcePath(active_file);
        active_path = active_path.substring(0, active_path.lastIndexOf("/"));
        for (const link of targetLinks) {
          let clean_link = link.src.replace("app://obsidian.md/", "");
          clean_link = clean_link.replace("capacitor://localhost/", "");
          let full_link = active_path + "/" + clean_link;
          link.src = full_link;
          if (import_obsidian.Platform.isMobile) {
            link.style.objectFit = "contain";
            link.height = 100;
          }
        }
      });
    });
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibWFpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtQbGF0Zm9ybSwgUGx1Z2luLCBURmlsZX0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgdHlwZSB7IE1hcmtkb3duVmlldyB9IGZyb20gJ29ic2lkaWFuJztcbmltcG9ydCB7cGxhdGZvcm19IGZyb20gXCJvc1wiO1xuXG5jb25zb2xlLmxvZyhcIlJ1bm5pbmcgb24gc2FtcGxlIGltZ1wiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSHRtbExvY2FsU3JjUGx1Z2luIGV4dGVuZHMgUGx1Z2luIHtcbiAgYXN5bmMgb25sb2FkKCkge1xuXHQvL2NvbnNvbGUubG9nKFwiUnVubmluZyBvbiAtLS0tLS0tLS0tLS0tLS1vbmxvYWRcIilcbiAgICB0aGlzLnJlZ2lzdGVyTWFya2Rvd25Qb3N0UHJvY2Vzc29yKChlbGVtZW50LCBjdHgpID0+IHtcblx0XHQvL2NvbnNvbGUubG9nKFwiUnVubmluZyBvbiA9PT0xXCIpXG5cdFx0Y29uc3QgYWN0aXZlX2ZpbGUgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlRmlsZSgpO1xuXHRcdGNvbnNvbGUubG9nKGFjdGl2ZV9maWxlLmJhc2VuYW1lKTtcbiAgICAgIGNvbnN0IHRhcmdldExpbmtzID0gQXJyYXkuZnJvbShlbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW1nXCIpKS5maWx0ZXIoXG4gICAgICAgIChsaW5rKSA9PlxuICAgICAgICAgIGxpbmsuc3JjLmNvbnRhaW5zKGFjdGl2ZV9maWxlLmJhc2VuYW1lKVxuICAgICAgKTtcbiAgICAgIFxuXHQgIFxuICAgICAgbGV0IGFjdGl2ZV9wYXRoID0gdGhpcy5hcHAudmF1bHQuZ2V0UmVzb3VyY2VQYXRoKGFjdGl2ZV9maWxlKVxuICAgICAgYWN0aXZlX3BhdGggPSBhY3RpdmVfcGF0aC5zdWJzdHJpbmcoMCwgYWN0aXZlX3BhdGgubGFzdEluZGV4T2YoXCIvXCIpKTtcbiAgICAgIC8vY29uc29sZS5sb2coJ2FjdGl2ZV9maWxlX3BhdGg6ICcgKyBhY3RpdmVfcGF0aClcblx0ICAvL2NvbnNvbGUubG9nKCdhcmcnK3RhcmdldExpbmtzKVxuICAgICAgZm9yIChjb25zdCBsaW5rIG9mIHRhcmdldExpbmtzKSB7XG4gICAgICAgIGxldCBjbGVhbl9saW5rID0gbGluay5zcmMucmVwbGFjZSgnYXBwOi8vb2JzaWRpYW4ubWQvJywgJycpXG4gICAgICAgIC8vIEZvciBpT1NcbiAgICAgICAgY2xlYW5fbGluayA9IGNsZWFuX2xpbmsucmVwbGFjZSgnY2FwYWNpdG9yOi8vbG9jYWxob3N0LycsICcnKVxuICAgICAgICAvL2NvbnNvbGUubG9nKCdjbGVhbl9saW5rOiAnICsgY2xlYW5fbGluaylcbiAgICAgICAgbGV0IGZ1bGxfbGluayA9ICBhY3RpdmVfcGF0aCArICcvJyArIGNsZWFuX2xpbmtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnZnVsbF9saW5rOiAnICsgZnVsbF9saW5rKVxuICAgICAgICBsaW5rLnNyYyA9IGZ1bGxfbGlua1xuICAgICAgICBpZihQbGF0Zm9ybS5pc01vYmlsZSkge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coXCJSdW5uaW5nIG9uIG1vYmlsZSBwbGF0Zm9ybSAtIHNldHRpbmcgb2JqZWN0IGZpdCBhbmQgaGVpZ2h0IG9mIGltZ1wiKVxuICAgICAgICAgIGxpbmsuc3R5bGUub2JqZWN0Rml0ID0gXCJjb250YWluXCJcbiAgICAgICAgICBsaW5rLmhlaWdodCA9IDEwMFxuICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgfVxufSJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUFzQztBQUl0QyxRQUFRLElBQUksdUJBQXVCO0FBQ25DLElBQXFCLHFCQUFyQixjQUFnRCx1QkFBTztBQUFBLEVBQ3JELEFBQU0sU0FBUztBQUFBO0FBRWIsV0FBSyw4QkFBOEIsQ0FBQyxTQUFTLFFBQVE7QUFFdkQsY0FBTSxjQUFjLEtBQUssSUFBSSxVQUFVLGNBQWM7QUFDckQsZ0JBQVEsSUFBSSxZQUFZLFFBQVE7QUFDNUIsY0FBTSxjQUFjLE1BQU0sS0FBSyxRQUFRLHFCQUFxQixLQUFLLENBQUMsRUFBRSxPQUNsRSxDQUFDLFNBQ0MsS0FBSyxJQUFJLFNBQVMsWUFBWSxRQUFRLENBQzFDO0FBR0EsWUFBSSxjQUFjLEtBQUssSUFBSSxNQUFNLGdCQUFnQixXQUFXO0FBQzVELHNCQUFjLFlBQVksVUFBVSxHQUFHLFlBQVksWUFBWSxHQUFHLENBQUM7QUFHbkUsbUJBQVcsUUFBUSxhQUFhO0FBQzlCLGNBQUksYUFBYSxLQUFLLElBQUksUUFBUSxzQkFBc0IsRUFBRTtBQUUxRCx1QkFBYSxXQUFXLFFBQVEsMEJBQTBCLEVBQUU7QUFFNUQsY0FBSSxZQUFhLGNBQWMsTUFBTTtBQUVyQyxlQUFLLE1BQU07QUFDWCxjQUFHLHlCQUFTLFVBQVU7QUFFcEIsaUJBQUssTUFBTSxZQUFZO0FBQ3ZCLGlCQUFLLFNBQVM7QUFBQSxVQUNoQjtBQUFBLFFBQ0E7QUFBQSxNQUNKLENBQUM7QUFBQSxJQUNIO0FBQUE7QUFDRjsiLAogICJuYW1lcyI6IFtdCn0K