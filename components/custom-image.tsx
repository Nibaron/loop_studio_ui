import NextImage, { ImageProps } from 'next/image';
import React from 'react';

interface CustomImageProps extends ImageProps {
  defaultWidth?: number;
  defaultHeight?: number;
}

const CustomImage: React.FC<CustomImageProps> = ({
  defaultWidth = 1920, // Default width if not provided
  defaultHeight = 1080, // Default height if not provided
  ...props
}) => {
  const { width, height } = props;

  // Check if width and height are provided, otherwise use default values
  const resolvedWidth = width || defaultWidth;
  const resolvedHeight = height || defaultHeight;

  return <NextImage {...props} width={resolvedWidth} height={resolvedHeight} />;
};

export default CustomImage;