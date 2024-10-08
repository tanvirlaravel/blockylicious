import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
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
	console.log(className);
	return (
		<>
			<section className={`${className} alignfull`} {...blockProps}>
				{props.attributes.enableTopCurve && <Curve />}
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
						</>
					)}
				</PanelBody>
			</InspectorControls>
		</>
	);
}
