React_Router_Now_Supports_Contextual_Routing
React Router just released `v7.13.1`. Along with a few bug fixes and improvements, it also introduced an exciting new feature: URL masking through the new `<Link unstable_mask={...}>` API for Framework and Data Mode. This API now provides a first-class way to handle contextual routing. But what exactly is contextual routing?

Already familiar with contextual routing? Feel free to skip ahead to the API section. If not, let’s quickly break it down first.

## Contextual Routing

### What Is Contextual Routing?

Contextual Routing means that the same URL might lead to different routes depending on how it was reached.

At first, that might sound like inconsistent behavior, but it really isn't once the context is clear.

For example, imagine you are browsing a product catalog and click on a product. Instead of opening as a separate page, the product details show up in a modal (overlay on top of the catalog). That is great for UX because you can quickly check the product without moving away from the catalog.

Now suppose you want to share that product URL with a friend. Without contextual routing, that same URL could open the catalog page with the modal on top, which is not ideal because your friend only needs the product page, not the catalog in the background.

This is where contextual routing comes in. When you open the product from the catalog, the catalog stays in the background and the details appear in a modal. But when your friend visits the same URL directly, the app renders the full product page instead.

### How Contextual Routing Works

Now you know what contextual routing is, but how does it actually work? The neat trick here is that we make the browser mask the real URL and instead display a URL that we want.

So when you click a product and the modal opens, the URL in the address bar is not really the one you were routed to. We **mask** the original URL with the one for that product’s detail page. This is why, when you share that URL or open it in a new tab, it opens as the full product detail page instead of reopening the product catalog with the modal on top.

## Reddit Example

To better understand this concept, let’s see how Reddit uses contextual routing.

In Reddit’s home feed, clicking on an image opens it in a modal while keeping the home feed in the background.

![Reddit Modal Image]({{base}}/reddit_contextual_routing_1.webp)

Now, if you copy that URL and open it in a new tab, it opens the detailed view for that post.

![Reddit Post Detailed View ]({{base}}/reddit_contextual_routing_2.webp)

## Using the URL Masking API in React Router

This part is really easy, and I mean really easy. To enable URL Masking, all you have to do is add the `unstable_mask` prop to the `Link` component, and that’s it. Congratulations, you have now enabled contextual routing.

```jsx
<Link
    to={"actual url string"}
    unstable_mask={"masked url string"}
>
```

Here's an example from the official documentation:

```jsx
export default function Gallery({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <GalleryGrid>
        {loaderData.images.map((image) => (
          <Link
            key={image.id}
            to={`/gallery?image=${image.id}`}
            unstable_mask={`/images/${image.id}`}
          >
            <img src={image.url} alt={image.alt} />
          </Link>
        ))}
      </GalleryGrid>

      {data.modalImage ? (
        <dialog open>
          <img src={data.modalImage.url} alt={data.modalImage.alt} />
        </dialog>
      ) : null}
    </>
  );
}
```

View this example in

- [Github Repository](https://github.com/remix-run/react-router/tree/main/examples/modal-data-router)
- [Stackblitz](https://stackblitz.com/github/remix-run/react-router/tree/main/examples/modal-data-router?file=src/App.tsx)

> **⚠️ Caution**
>
> Keep these points in mind when using the `unstable_mask` API:
>
> 1 - According to the official documentation, this feature is intended only for SPA use, and SSR renders do not preserve the masking.
>
> > "This feature relies on `history.state` and is thus only intended for SPA uses and SSR renders will not respect the masking."
> >
> > — [React Router Documentation](https://reactrouter.com/api/components/Link#unstable_mask)
>
> 2 - This API is still unstable, so it may go through changes before it is safe to rely on in production.

Hopefully, this article gave you a clear idea of what contextual routing is and how the new URL Masking API makes it easier to implement. If you have any questions, feel free to comment below.

## Further Reading

If you want to explore this topic further, here are two useful resources:

1. Official React Router [documentation](https://reactrouter.com/api/components/Link#unstable_mask) for the `unstable_mask` API.
2. This [Baymard article](https://baymard.com/blog/mobile-desktop-quick-views) on quick views explains why modal-based product previews can improve the shopping experience.
