import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, ToggleControl } from "@wordpress/components";
import "./editor.scss";
import metadata from "./block.json";
import Curve from "./components/curve";
import TopCurveSetting from "./components/topCurveSetting";
import BottomCurveSetting from "./components/bottomCurveSetting";

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
						color={props.attributes.topColor}
						flipX={props.attributes.topFlipX}
						flipY={props.attributes.topFlipY}
						height={props.attributes.topHeight}
						width={props.attributes.topWidth}
					/>
				)}

				{props.attributes.enableBottomCurve && (
					<Curve
						isBottom
						color={props.attributes.bottomColor}
						flipX={props.attributes.bottomFlipX}
						flipY={props.attributes.bottomFlipY}
						height={props.attributes.bottomHeight}
						width={props.attributes.bottomWidth}
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
						<TopCurveSetting
							attributes={props.attributes}
							setAttributes={props.setAttributes}
						/>
					)}
				</PanelBody>

				<PanelBody title={__("Bottom Curve", metadata.textdomain)}>
					<div style={{ display: "flex" }}>
						<ToggleControl
							checked={props.attributes.enableBottomCurve}
							onChange={(isChecked) => {
								props.setAttributes({
									enableBottomCurve: isChecked,
								});
							}}
						/>
						<span>{__("Enable Bottom Curve", metadata.textdomain)} </span>
					</div>

					{props.attributes.enableBottomCurve && (
						<BottomCurveSetting
							attributes={props.attributes}
							setAttributes={props.setAttributes}
						/>
					)}
				</PanelBody>
			</InspectorControls>
		</>
	);
}
