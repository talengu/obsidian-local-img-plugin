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
      console.log("Running on ---------------onload");
      this.registerMarkdownPostProcessor((element, ctx) => {
        console.log("Running on ===1");
        const active_file = this.app.workspace.getActiveFile();
        console.log(active_file.basename);
        const targetLinks = Array.from(element.getElementsByTagName("img")).filter((link) => link.src.contains(active_file.basename) || link.src.contains("png") || link.src.contains("jpg"));
        let active_path = this.app.vault.getResourcePath(active_file);
        active_path = active_path.substring(0, active_path.lastIndexOf("/"));
        console.log("active_file_path: " + active_path);
        console.log("arg" + targetLinks);
        for (const link of targetLinks) {
          let clean_link = link.src.replace("app://obsidian.md/", "");
          clean_link = clean_link.replace("capacitor://localhost/", "");
          console.log("clean_link: " + clean_link);
          let full_link = active_path + "/" + clean_link;
          console.log("full_link: " + full_link);
          link.src = full_link;
          if (import_obsidian.Platform.isMobile) {
            console.log("Running on mobile platform - setting object fit and height of img");
            link.style.objectFit = "contain";
            link.height = 100;
          }
        }
      });
    });
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibWFpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtQbGF0Zm9ybSwgUGx1Z2luLCBURmlsZX0gZnJvbSBcIm9ic2lkaWFuXCI7XHJcbmltcG9ydCB0eXBlIHsgTWFya2Rvd25WaWV3IH0gZnJvbSAnb2JzaWRpYW4nO1xyXG5pbXBvcnQge3BsYXRmb3JtfSBmcm9tIFwib3NcIjtcclxuXHJcbmNvbnNvbGUubG9nKFwiUnVubmluZyBvbiBzYW1wbGUgaW1nXCIpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEh0bWxMb2NhbFNyY1BsdWdpbiBleHRlbmRzIFBsdWdpbiB7XHJcbiAgYXN5bmMgb25sb2FkKCkge1xyXG5cdGNvbnNvbGUubG9nKFwiUnVubmluZyBvbiAtLS0tLS0tLS0tLS0tLS1vbmxvYWRcIilcclxuICAgIHRoaXMucmVnaXN0ZXJNYXJrZG93blBvc3RQcm9jZXNzb3IoKGVsZW1lbnQsIGN0eCkgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coXCJSdW5uaW5nIG9uID09PTFcIilcclxuXHRcdGNvbnN0IGFjdGl2ZV9maWxlID0gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZUZpbGUoKTsgLy9cdTVERTVcdTRGNUNcdTUzM0FcdTYyNTNcdTVGMDBcdTc2ODRcdTY1ODdcdTRFRjZcdTU0MERcclxuXHRcdGNvbnNvbGUubG9nKGFjdGl2ZV9maWxlLmJhc2VuYW1lKTtcclxuICAgICAgY29uc3QgdGFyZ2V0TGlua3MgPSBBcnJheS5mcm9tKGVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbWdcIikpLmZpbHRlcihcclxuICAgICAgICAobGluaykgPT5cclxuICAgICAgICAgIGxpbmsuc3JjLmNvbnRhaW5zKGFjdGl2ZV9maWxlLmJhc2VuYW1lKSB8fCBsaW5rLnNyYy5jb250YWlucyhcInBuZ1wiKSB8fCBsaW5rLnNyYy5jb250YWlucyhcImpwZ1wiKVxyXG4gICAgICApOyAgLy9cdTgzQjdcdTUzRDZvYnNpZGlhblx1OTc2Mlx1Njc3Rlx1OTFDQ1x1RkYwOFx1NjU3NFx1NEUyQVx1OEY2Rlx1NEVGNlx1NjYzRVx1NzkzQVx1OTBFOFx1NTIwNlx1RkYwOVx1OTFDQ1x1NTMwNVx1NTQyQmltZ1x1NjgwN1x1N0I3RVx1NzY4NFx1NjgzN1x1NUYwRlx1MzAwMlxyXG4gICAgICAvL1x1NTg5RVx1NTJBMHBuZ1x1NTQ4Q2pwZ1x1Njc2MVx1NEVGNlx1RkYwQ1x1NjI4QVx1NjI0MFx1NjcwOVx1NzY4NFx1NTZGRVx1NzI0N1x1OTBGRFx1OTAwOVx1NTFGQVx1Njc2NVx1MzAwMlxyXG5cdCAgXHJcbiAgICAgIGxldCBhY3RpdmVfcGF0aCA9IHRoaXMuYXBwLnZhdWx0LmdldFJlc291cmNlUGF0aChhY3RpdmVfZmlsZSlcclxuICAgICAgYWN0aXZlX3BhdGggPSBhY3RpdmVfcGF0aC5zdWJzdHJpbmcoMCwgYWN0aXZlX3BhdGgubGFzdEluZGV4T2YoXCIvXCIpKTtcclxuICAgICAgY29uc29sZS5sb2coJ2FjdGl2ZV9maWxlX3BhdGg6ICcgKyBhY3RpdmVfcGF0aClcclxuXHQgIGNvbnNvbGUubG9nKCdhcmcnK3RhcmdldExpbmtzKSAvL1x1NTcyOFx1OEZEOVx1OTFDQ1x1NEUyRFx1NjU4N1x1OERFRlx1NUY4NFx1NUMzMVx1ODNCN1x1NTNENlx1NEUwRFx1NTIzMFx1NEU4Nlx1MzAwMlx1NjVFMFx1NkNENVx1ODNCN1x1NTNENltvYmplY3QgSFRNTEltYWdlRWxlbWVudF1cclxuICAgICAgZm9yIChjb25zdCBsaW5rIG9mIHRhcmdldExpbmtzKSB7XHJcbiAgICAgICAgLy9cdTVDMDZcdTYyNDBcdTY3MDlcdTU2RkVcdTcyNDdcdTk0RkVcdTYzQTVcdTkxQ0NcdTc2ODRhcHA6Ly9vYnNpZGlhbi5tZC9cdTUzQkJcdTYzODlcdTMwMDJcclxuICAgICAgICBsZXQgY2xlYW5fbGluayA9IGxpbmsuc3JjLnJlcGxhY2UoJ2FwcDovL29ic2lkaWFuLm1kLycsICcnKVxyXG4gICAgICAgIC8vIEZvciBpT1NcclxuICAgICAgICBjbGVhbl9saW5rID0gY2xlYW5fbGluay5yZXBsYWNlKCdjYXBhY2l0b3I6Ly9sb2NhbGhvc3QvJywgJycpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NsZWFuX2xpbms6ICcgKyBjbGVhbl9saW5rKVxyXG4gICAgICAgIGxldCBmdWxsX2xpbmsgPSAgYWN0aXZlX3BhdGggKyAnLycgKyBjbGVhbl9saW5rXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Z1bGxfbGluazogJyArIGZ1bGxfbGluaylcclxuICAgICAgICBsaW5rLnNyYyA9IGZ1bGxfbGlua1xyXG4gICAgICAgIGlmKFBsYXRmb3JtLmlzTW9iaWxlKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlJ1bm5pbmcgb24gbW9iaWxlIHBsYXRmb3JtIC0gc2V0dGluZyBvYmplY3QgZml0IGFuZCBoZWlnaHQgb2YgaW1nXCIpXHJcbiAgICAgICAgICBsaW5rLnN0eWxlLm9iamVjdEZpdCA9IFwiY29udGFpblwiXHJcbiAgICAgICAgICBsaW5rLmhlaWdodCA9IDEwMFxyXG4gICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn0iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBc0M7QUFJdEMsUUFBUSxJQUFJLHVCQUF1QjtBQUNuQyxJQUFxQixxQkFBckIsY0FBZ0QsdUJBQU87QUFBQSxFQUNyRCxBQUFNLFNBQVM7QUFBQTtBQUNoQixjQUFRLElBQUksa0NBQWtDO0FBQzNDLFdBQUssOEJBQThCLENBQUMsU0FBUyxRQUFRO0FBQ3ZELGdCQUFRLElBQUksaUJBQWlCO0FBQzdCLGNBQU0sY0FBYyxLQUFLLElBQUksVUFBVSxjQUFjO0FBQ3JELGdCQUFRLElBQUksWUFBWSxRQUFRO0FBQzVCLGNBQU0sY0FBYyxNQUFNLEtBQUssUUFBUSxxQkFBcUIsS0FBSyxDQUFDLEVBQUUsT0FDbEUsQ0FBQyxTQUNDLEtBQUssSUFBSSxTQUFTLFlBQVksUUFBUSxLQUFLLEtBQUssSUFBSSxTQUFTLEtBQUssS0FBSyxLQUFLLElBQUksU0FBUyxLQUFLLENBQ2xHO0FBR0EsWUFBSSxjQUFjLEtBQUssSUFBSSxNQUFNLGdCQUFnQixXQUFXO0FBQzVELHNCQUFjLFlBQVksVUFBVSxHQUFHLFlBQVksWUFBWSxHQUFHLENBQUM7QUFDbkUsZ0JBQVEsSUFBSSx1QkFBdUIsV0FBVztBQUNqRCxnQkFBUSxJQUFJLFFBQU0sV0FBVztBQUMxQixtQkFBVyxRQUFRLGFBQWE7QUFFOUIsY0FBSSxhQUFhLEtBQUssSUFBSSxRQUFRLHNCQUFzQixFQUFFO0FBRTFELHVCQUFhLFdBQVcsUUFBUSwwQkFBMEIsRUFBRTtBQUM1RCxrQkFBUSxJQUFJLGlCQUFpQixVQUFVO0FBQ3ZDLGNBQUksWUFBYSxjQUFjLE1BQU07QUFDckMsa0JBQVEsSUFBSSxnQkFBZ0IsU0FBUztBQUNyQyxlQUFLLE1BQU07QUFDWCxjQUFHLHlCQUFTLFVBQVU7QUFDcEIsb0JBQVEsSUFBSSxtRUFBbUU7QUFDL0UsaUJBQUssTUFBTSxZQUFZO0FBQ3ZCLGlCQUFLLFNBQVM7QUFBQSxVQUNoQjtBQUFBLFFBQ0E7QUFBQSxNQUNKLENBQUM7QUFBQSxJQUNIO0FBQUE7QUFDRjsiLAogICJuYW1lcyI6IFtdCn0K
