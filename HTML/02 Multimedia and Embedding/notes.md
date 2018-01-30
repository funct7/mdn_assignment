
## 2. Multimedia and embedding

### Images

  - `<img>` is an empty tag--i.e. it has no text content or closing tag--and requires at least one attribute `src` to be useful.
  - Use descriptive names for images. Search engines count them towards SEO (Search Engine Optimization).
  - Never point the `img` tag's `src` to an image on someone else's website unless given permission to do so. ("hotlinking")
  - `alt` attribute: An alternative text to be shown for situations where the images cannot be loaded.
    - Usage
      - For accessibility reasons
      - Browser may not support the image type
      - Search engines may match alt text to search queries
      - User has turned off images
    - Best practice
      - Decoration: If the image is for decoration, place it in CSS. Otherwise, use empty string for `alt`.
      - Content: If the image provides significant information, try to embed the information in the main text. Otherwise, provide a brief explanation.
  - `width`, `height` attributes: Do not use it to resize images. Use it so the page can maintain its layout even without the image.
  - `title`: Provides a floating tooltip when the mouse is over the image.

### Figure
  - `<figure>`: A semantic container for figures, linking the figure to the caption provided in `<figcaption>`.
  - A figure need not be an image. It could be several images, a code snippet, audio, video, equations, a table, etc.

### Video / Audio
  - OVP: Online video providers
  - Container format: Formats such as MP3, MP4, WebM contain different parts that make up the video: e.g. an audio track, a video track, metadata
    - WebM: Ogg Vorbis audio with VP8/VP9 video. Supported mainly in Firefox and Chrome
    - MP4: AAC/MP3 audio with H.264 video. Supported mainly in Internet Explorer and Safari
    - The older Ogg container had Ogg Vorbis audio and Ogg Theora video, but was superceded by WebM
  - `<video>` Attributes
    - `src`: the path to the video file
    - `controls`
    - `width` and `height`: The videos will fill horizontally, but the original aspect ratio of the video will be kept.
    - `autoplay`, `loop`, `muted`, 
    - `poster`: takes the URL of an image. To be used before the video is played.
    - `preload`: can take one of three values: `"none"`, `"auto"`, `"metadata"`
    - Paragraph inside `<video>` tags: Fallback content to be displayed in the video is not supported by the browser.
    - `<source>` element: If multiple sources are provided with the `<source>` tag, the browser goes through the list and play the first one it supports
      - `src`: the relative link
      - `type`: Optional attribute. If not included, however, the browser will have to actually download files to check if it can play them. Examples are `"video/mp4"`, `"video/webm"`

  - The `<audio>` element is similar to the `<video>` element. It just doesn't support visual related attributes.

### Embedding
  - `<iframe>` elements are designed to allow developers to embed other web documents.
  - There are some security concerns about `<iframe>`s.
  - `<iframe>` Attributes
    - `allowfullscreen`
    - `frameborder`: `1` will draw a frame border. `0` is the default behavior. The same effect can be achieved by using `border: none;` in CSS, so it is not recommended any more.
    - `src`: It is a good idea to set this with JavaScript after the main content is done loading. This improves the load time of the page.
    - Fallback content: Similar to `<video>`, between the opening and closing tags, fallback content can be provided.
    - `sandbox`: requests heightened security settings.

  - Security concerns
    - Embed only when necessary: third-party content may not be secure
    - Use HTTPS: Only embed third-party content with HTTPS
    - Always use the `sandbox` attribute: Adding permissions is okay if necessary. However, **never add both `allow-scripts` and `allow-same-origin`** to the `sandbox` attribute.
    - Configure CSP(=Content security policy) directives: CSP provides a set of HTTP headers designed to improve the security of HTML documents. Configure the server to send an appropriate `X-Frame-Options` header.

  - `<embed>` and `<object>` elements
    - Mostly legacy technology. They are out of fashion because plugins are also becoming obsolete and there are better ways to render media on to the web page.

### Vector Graphics
  - SVG(=Scalable Vector Graphics): XML-based language for describing vector images
    - Advantages
      - Text in vector images are accessible (which benefits SEO)
      - Respond well to styling and scripting
    - Disadvantages
      - SVGs can get complicated. Complex structures may take some time for the browser to render
      - Can be harder to create than raster images
      - Not supported in older browsers

  - Using SVG in pages
    - Using the `<img>` tag: Provide the reference in the `src` attribute and set the width and/or height
    - Pros
      - Quick and familiar syntax
      - Making the image into a hyperlink is easy using the `<a>` tag.
    - Cons
      - Image cannot be manipulated with JavaScript
      - Only inline CSS styles in SVG code works
      - Image cannot be restyled with CSS pseudoclasses.
    - Compatibility: For browsers that don't support SVG, use PNG or JPG for the `src` attribute and put the SVG in the `srcset` attribute. This loads PNG files for older browsers and SVGs for the more recent browsers.
    - SVGs can be used as CSS background images, but as with `<img>` tags, the SVG can't be manipulated with JavaScript, and is subject to the same CSS limitations

  - Inlining SVG: using the `<svg>` tags, SVG code can go directly inside HTML
    - Pros
      - Saves an HTTP request, meaning the loading time can be shorter
      - `class`es and `id`s can be assigned, and any SVG presentation attribute can be used as a CSS property
      - The only approach that allows CSS interactions and CSS animations on the SVG image
      - Can be made into a hyperlink by wrapping it in a `<a>` element
    - Cons
      - The same SVG should be used only in one place because it makes maintenence hard
      - HTML file size increase
      - The browser cannot cache inline SVG
      - Fallback can be provided in a `<foreignObject>` element, but since SVG supporting browsers download any fallback images by default, there is some overhead

  - `<iframe>`
    - Embedding an SVG image can be done the same way you would other things
    - Not recommended

### Responsive Images
  - Resolution switching problem
    - Using the right resolution image depending on the device resolution, display size, and network. Shows the same thing but containing different numbers of pixels.

    - `<img>` tag

      ```
      <img srcset="elva-fairy-320w.jpg 320w,
                   elva-fairy-480w.jpg 480w,
                   elva-fairy-800w.jpg 800w"
           sizes="(max-width: 320px) 280px,
                  (max-width: 480px) 440px,
                  800px"
           src="elva-fairy-800w.jpg" alt="Elva dressed as a fairy">
      ```

      - `srcset` attribute: `"image-filename.jpg 320w"`
      - `sizes` attribute: `"(max-width:480px) 440px"`
        - The slot width may be absolute length (`px`, `em`) or relative length (percentage).
        - The last slot width has no media condition. It's the `else` in an `if-else` statement.

      - Given these attributes the browser will:
        1. Get the device width and check which condition in `sizes` matches.
        2. Look at the slot size and load the image in the `srcset` list that is closest to the chosen slot size.


  - Art direction: Using different images suitable for different space allocations
    - `<picture>` tag
    
      ```
      <picture>
        <source media="(max-width: 799px)" srcset="elva-480w-close-portrait.jpg">
        <source media="(min-width: 800px)" srcset="elva-800w.jpg">
        <img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva">
      </picture>
      ```

      - `<source>` element: the `media` attribute contains a media condition, and the first one that returns true will be displayed.
      - `srcset` attributes contain the path to the image to display.
      - `sizes` attribute is also possible for resolution switching.
      - `<img>` element must be provided, with `src` and `alt`, right before the closing `</picture>` tag. This is the fallback when none of the medai conditions return true.

  - Modern image formats
    - By supplying MIME types inside `type` attributes, the browser can reject file types immediately if unsupported.

    ```
    <picture>
      <source type="image/svg+xml" srcset="pyramid.svg">
      <source type="image/webp" srcset="pyramid.webp"> 
      <img src="pyramid.png" alt="regular pyramid built from four equilateral triangles">
    </picture>
    ```

    - Do not use the `media` attribute, unless for art direction.
    - Only the file types specified in `type` are allowed in the `<source>` element

