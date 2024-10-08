import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	ColorPalette,
} from "@wordpress/block-editor";
import {
	PanelBody,
	ToggleControl,
	HorizontalRule,
	RangeControl,
} from "@wordpress/components";
import "./editor.scss";
import metadata from "./block.json";
import Curve from "./components/curve";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit(props) {
	const { className, ...blockProps } = useBlockProps();
	return (
		<>
			<section className={`${className} alignfull`} {...blockProps}>
				{props.attributes.enableTopCurve && (
					<Curve
						flipX={props.attributes.topFlipX}
						flipY={props.attributes.topFlipY}
						height={props.attributes.topHeight}
						width={props.attributes.topWidth}
					/>
				)}
			</section>

			<InspectorControls>
				<PanelBody title={__("Top Curve", metadata.textdomain)}>
					<div style={{ display: "flex" }}>
						<ToggleControl
							checked={props.attributes.enableTopCurve}
							onChange={(isChecked) => {
								props.setAttributes({
									enableTopCurve: isChecked,
								});
							}}
						/>
						<span>{__("Enable Top Curve", metadata.textdomain)} </span>
					</div>

					{props.attributes.enableTopCurve && (
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
					)}
				</PanelBody>
			</InspectorControls>
		</>
	);
}
