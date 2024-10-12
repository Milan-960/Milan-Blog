/**
 * Custom loader for next/image to bypass domain validation
 *  next/image  Image Component
 *    src
 *
 *  src
 */
export const customLoader = ({ src }: { src: string }) => {
  return src;
};
