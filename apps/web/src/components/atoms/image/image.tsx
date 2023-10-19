export const BaseImage = (props: {
  src: string;
  aspectRatio?: string;
  width?: string;
  height?: string;
}) => {
  if (props.width !== undefined) {
    return (
      <div
        style={{
          width: props.width,
          aspectRatio: props.aspectRatio,
        }}
      >
        <img
          src={props.src}
          alt={"NoImage"}
          style={{
            objectFit: "contain",
            width: "100%",
            height: "100%",
          }}
          // alt="title"
        />
      </div>
    );
  } else if (props.height !== undefined) {
    return (
      <div
        style={{
          height: props.height,
          aspectRatio: props.aspectRatio,
        }}
      >
        <img
          src={props.src}
          alt={"NoImage"}
          style={{
            objectFit: "contain",
            width: "100%",
            height: "100%",
          }}
          // alt="title"
        />
      </div>
    );
  } else {
    return (
      <div
        style={{
          width: "100%",
          aspectRatio: props.aspectRatio,
        }}
      >
        <img
          src={props.src}
          alt={"NoImage"}
          style={{
            objectFit: "contain",
            width: "100%",
            height: "100%",
          }}
          // alt="title"
        />
      </div>
    );
  }
};
BaseImage.defaultProps = {
  aspectRatio: "16/9",
};
