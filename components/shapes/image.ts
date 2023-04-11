import PropTypes from "prop-types";

const imageShape = PropTypes.shape({
  altText: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  url: PropTypes.string,
  url2x: PropTypes.string,
  url3x: PropTypes.string,
  thumb: PropTypes.string,
  thumb2x: PropTypes.string,
  className: PropTypes.string,
  focalPointX: PropTypes.number,
  focalPointY: PropTypes.number,
}).isRequired;

export interface Image {
  altText?: string;
  width?: number;
  height?: number;
  url: string;
  url2x?: string;
  url3x?: string;
  thumb?: string;
  thumb2x?: string;
  className?: string;
  focalPointX?: number;
  focalPointY?: number;
}

export default imageShape;
