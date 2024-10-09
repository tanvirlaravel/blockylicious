import { __ } from "@wordpress/i18n";
import { ColorPalette } from "@wordpress/block-editor";
import {
	ToggleControl,
	HorizontalRule,
	RangeControl,
} from "@wordpress/components";
import metadata from "../block.json";

function BottomCurveSetting(props) {
	return (
		<>
			<HorizontalRule />
			<RangeControl
				min={100}
				max={300}
				value={props.attributes.bottomWidth || 100}
				label={__("Width", metadata.textdomain)}
				onChange={(newValue) => {
					props.setAttributes({ bottomWidth: parseInt(newValue) });
				}}
			/>

			<RangeControl
				min={0}
				max={200}
				value={props.attributes.bottomHeight}
				label={__("Height", metadata.textdomain)}
				onChange={(newValue) => {
					props.setAttributes({ bottomHeight: parseInt(newValue) });
				}}
			/>

			<HorizontalRule />
			<div style={{ display: "flex" }}>
				<ToggleControl
					checked={props.attributes.bottomFlipX}
					onChange={(isChecked) => {
						props.setAttributes({
							bottomFlipX: isChecked,
						});
					}}
				/>
				<span>{__("Flip horizontally", metadata.textdomain)} </span>
			</div>
			<div style={{ display: "flex" }}>
				<ToggleControl
					checked={props.attributes.bottomFlipY}
					onChange={(isChecked) => {
						props.setAttributes({
							bottomFlipY: isChecked,
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
					value={props.attributes.bottomColor}
					onChange={(value) => {
						props.setAttributes({ bottomColor: value });
					}}
				/>
			</div>
		</>
	);
}
export default BottomCurveSetting;
