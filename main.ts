import { App, Editor, EventRef, MarkdownPostProcessorContext, MarkdownView, Modal, Notice, Platform, Plugin, PluginSettingTab, Setting, TFile } from 'obsidian';
import {
	EditorView,
	PluginValue,
	ViewPlugin,
	ViewUpdate,
	DecorationSet,
	Decoration,
} from "@codemirror/view";

interface PluginSettings {
	mySetting: string;
}

const DEFAULT_SETTINGS: PluginSettings = {
	mySetting: 'default'
}


class VerticalLinesPluginValue implements PluginValue {
	constructor(
		private path: string,
		private view: EditorView,
		private callback: Function,

	) {
		// console.log(this.view);
	}

	update(update: ViewUpdate) {
		// console.log("update", update);
		this.callback(this.view.dom, this.path);

		// if (
		// 	update.docChanged ||
		// 	update.viewportChanged ||
		// 	update.geometryChanged ||
		// 	update.transactions.some((tr) => tr.reconfigured)
		// ) {
		// 	this.scheduleRecalculate();
		// }
	}
}

export default class HtmlLocalImgPlugin extends Plugin {
	settings: PluginSettings;

	async onload() {
		await this.loadSettings();
		console.log("Running on ---------------onload")


		this.registerMarkdownPostProcessor((element, ctx) => {
			this.processElement(element, ctx.sourcePath);
		})



		let activeFile = this.app.workspace.getActiveFile();
		if (activeFile) {
			this.registerEditorExtension(
				ViewPlugin.define(
					(view) =>
						new VerticalLinesPluginValue(
							activeFile?.path,
							view,
							this.processElement.bind(this)
						)),
			);
		}
	}

	processElement(element: HTMLElement, sourcePath: string) {
		let targetLinks = Array.from(element.getElementsByTagName("img"));
		// console.log('targetLinks: ', targetLinks)

		if (this.app?.metadataCache == null) {
			return;
		}
		for (const link of targetLinks) {
			// console.log('link.src: ', link.src);
			if (link.src == "" || link.src.includes("https://")) {
				continue;
			}
			let clean_link = link.src.replace('app://obsidian.md/', '')
      // For iOS
			clean_link = clean_link.replace('capacitor://localhost/', '')
			// console.log('clean_link: ' + clean_link)

			let imageFile = this.app.metadataCache.getFirstLinkpathDest(clean_link, sourcePath);
			if (imageFile == null) {
				// console.log('null clean_link: ' + clean_link)
				// console.log('imageFile is null')
				continue;
			}

			let active_path = this.app.vault.getResourcePath(imageFile)
			//console.log('active_path: ' + active_path)
	
			let full_link = active_path + '/' + clean_link
			//console.log('full_link: ' + full_link)

			link.src = full_link
			if (Platform.isMobile) {
				console.log("Running on mobile platform - setting object fit and height of img")
				link.style.objectFit = "contain"
				link.height = 100
			}
		}
	}
	onunload() {

	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}