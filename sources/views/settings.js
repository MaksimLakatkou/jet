
import {JetView} from "webix-jet";

export default class SettingsView extends JetView {
	config() {
		const _ = this.app.getService("locale")._;
		const lang = this.app.getService("locale").getLang();

		return {
			padding:20,
			rows: [
				{
					type: "section",
					template: _("Language")
				},
				{
					view: "segmented",
					localId: "segmentedLocale",
					inputWidth: 200,
					options: [
						{
							id: "en",
							value: _("English")
						},
						{
							id: "ru",
							value: _("Russian")
						},
					],
					click:() => this.toggleLanguage(),
					value: lang
				},
				{}
			]
		};
	}

	$getSegmentedView() {
		return this.$$("segmentedLocale");
	}

	getSegmentedViewValue() {
		return this.$getSegmentedView().getValue();
	}

	toggleLanguage(){
		const langs = this.app.getService("locale");
		const value = this.getSegmentedViewValue();
		langs.setLang(value);
	}
}