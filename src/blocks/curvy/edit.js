/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit() {

	// const blockProps = useBlockProps();
	// blockProps = {
	// 	"tabIndex": 0,
	// 	"className": "block-editor-block-list__block wp-block wp-block-blockylicious-curvy",
	// 	"id": "block-8f9478a6-488c-4ea6-9b38-bfebb3b23db6",
	// 	"role": "document",
	// 	"aria-label": "Block: Curvy",
	// 	"data-block": "8f9478a6-488c-4ea6-9b38-bfebb3b23db6",
	// 	"data-type": "blockylicious/curvy",
	// 	"data-title": "Curvy",
	// 	"style": {}
	// }

	return (
		<>
		<p { ...useBlockProps() }>
			{ __( 'Blockylicious – hello from the editor!', 'blockylicious' ) }
		</p>
		<InspectorControls>
			<PanelBody title="Top Curve">
				<div style={{ display:'flex' }}>
					<ToggleControl />
					<span>Enable Top Curve</span>
				</div>
			</PanelBody>
		</InspectorControls>
		</>
	);
}


