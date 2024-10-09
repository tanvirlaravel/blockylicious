import { __ } from "@wordpress/i18n";
import { ColorPalette } from "@wordpress/block-editor";
import {
	ToggleControl,
	HorizontalRule,
	RangeControl,
} from "@wordpress/components";
import metadata from "../block.json";

function TopCurveSetting(props) {
	return (
		<>
			<HorizontalRule />
			<RangeControl
				min={100}
				max={300}
				value={props.attributes.topWidth || 100}
				label={__("Width", metadata.textdomain)}
				onChange={(newValue) => {
					props.setAttributes({ topWidth: parseInt(newValue) });
				}}
			/>

			<RangeControl
				min={0}
				max={200}
				value={props.attributes.topHeight}
				label={__("Height", metadata.textdomain)}
				onChange={(newValue) => {
					props.setAttributes({ topHeight: parseInt(newValue) });
				}}
			/>

			<HorizontalRule />
			<div style={{ display: "flex" }}>
				<ToggleControl
					checked={props.attributes.topFlipX}
					onChange={(isChecked) => {
						props.setAttributes({
							topFlipX: isChecked,
						});
					}}
				/>
				<span>{__("Flip horizontally", metadata.textdomain)} </span>
			</div>
			<div style={{ display: "flex" }}>
				<ToggleControl
					checked={props.attributes.topFlipY}
					onChange={(isChecked) => {
						props.setAttributes({
							topFlipY: isChecked,
						});
					}}
				/>
				<span>{__("Flip Vertically", metadata.textdomain)} </span>
			</div>

			<HorizontalRule />
			<div>
				<label>{__("Curvy Color", metadata.textdomain)}</label>
				<ColorPalette
					// disableCustomColors
					// colors={[
					// 	{
					// 		name: 'Yellow',
					// 		color: "#ffff00"
					// 	}
					// ]}
					value={props.attributes.topColor}
					onChange={(value) => {
						props.setAttributes({ topColor: value });
					}}
				/>
			</div>
		</>
	);
}
export default TopCurveSetting;
