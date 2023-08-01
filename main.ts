import {Platform, Plugin, TFile} from "obsidian";
import type { MarkdownView } from 'obsidian';
import {platform} from "os";

console.log("Running on sample img")
export default class HtmlLocalSrcPlugin extends Plugin {
  async onload() {
	console.log("Running on ---------------onload")
    this.registerMarkdownPostProcessor((element, ctx) => {
		console.log("Running on ===1")
		const active_file = this.app.workspace.getActiveFile(); //工作区打开的文件名
		console.log(active_file.basename);
      const targetLinks = Array.from(element.getElementsByTagName("img")).filter(
        (link) =>
          link.src.contains(active_file.basename) || link.src.contains("png") || link.src.contains("jpg")
      );  //获取obsidian面板里（整个软件显示部分）里包含img标签的样式。
      //增加png和jpg条件，把所有的图片都选出来。
	  
      let active_path = this.app.vault.getResourcePath(active_file)
      active_path = active_path.substring(0, active_path.lastIndexOf("/"));
      console.log('active_file_path: ' + active_path)
	  console.log('arg'+targetLinks) //在这里中文路径就获取不到了。无法获取[object HTMLImageElement]
      for (const link of targetLinks) {
        //将所有图片链接里的app://obsidian.md/去掉。
        let clean_link = link.src.replace('app://obsidian.md/', '')
        // For iOS
        clean_link = clean_link.replace('capacitor://localhost/', '')
        console.log('clean_link: ' + clean_link)
        let full_link =  active_path + '/' + clean_link
        console.log('full_link: ' + full_link)
        link.src = full_link
        if(Platform.isMobile) {
          console.log("Running on mobile platform - setting object fit and height of img")
          link.style.objectFit = "contain"
          link.height = 100
        }
        }
    });
  }
}