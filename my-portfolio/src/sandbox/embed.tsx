import React from "react";

const PROPERTIES = {
  allow:
    "accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",
  sandbox:
    "allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts",
};

export const Embed = ({ source, title }: { source: string; title: string }) => {
  return (
    <section className="demo">
      <h4>{title}</h4>
      <iframe
        src={source}
        title={title}
        allow={PROPERTIES.allow}
        sandbox={PROPERTIES.sandbox}
      />
    </section>
  );
};
