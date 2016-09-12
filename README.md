# Using OAuth 2.0 to use APIs

OAuth is an open standard for authorization used to sign into 3rd party APIs
without exposing your password.

https://oauth.net/2/

# Some common OAuth providers:

Amazon, Basecamp, Bitbucket, bitly, Box, Cloud Foundry, Dailymotion, deviantART
Discogs, Dropbox, Etsy, Evernote, Facebook, Fitbit, Flickr, Formstack, Foursquare
GitHub, Goodreads, Google, Google App Engine, Huddle, Imgur, Instagram, Intel Cloud Services
Jive Software, LinkedIn, Microsoft (Hotmail, Windows Live, Messenger, Active Directory, Xbox)
Mixi, MySpace, Netflix, Passport, PayPal, Reddit, Salesforce.com, Sina Weibo
Stack Exchange, Strava, Stripe, Tumblr, Twitch, Twitter, Ubuntu One, Viadeo
Vimeo, VK, Withings, Xero, XING, Yahoo!, Yammer, Yandex, Yelp, Zendesk,...


This is an authorization protocol, rather than an authentication protocol.
- Authentication deals with verifying your identity.
- Once authentication has been verified, authorization asks "What are you allowed
to see/what am I allowed to show you?"

# Roles

3rd party app: client
- The client is the app attempting to get access to the user’s account.  It needs to get permission from the user before it can do so.

The API: “resource server"
- This role may no apply if the request is completely client side.
- The resource server is the API server used to access the user’s info.

The User: “resource owner"
- Resource owner is the person who is giving access to some portion of their account.

![picture](abstract_flow.png)


- The process starts when a user requests a resource or site login from the application.
- The website sees that the user is not authenticated. It formulates a request for the identity provider, encodes it, and sends it to the user as part of a redirect URL.
- The user's browser requests the redirect URL for the identity provider, including the application's request
- If necessary, the identity provider authenticates the user (perhaps by asking them for their username and password)
- Once the identity provider is satisfied that the user is sufficiently authenticated, it processes the application's request, formulates a response, and sends that back to the user along with a redirect URL back to the application.
- The user's browser requests the redirect URL that goes back to the application, including the identity provider's response
- The application decodes the identity provider's response, and carries on accordingly.
- (OAuth only) The response includes an access token which the application can use to gain direct access to the identity provider's services on the user's behalf.

When working with an API, like Google in today's example, a developer can simply sign up via
https://console.developers.google.com/ to get access to their API libraries.

There, you first create a new project and sign up to get credentials.  The two main
credentialing values consist of:
- a client_id
- an API Key

These will be used by the REST API to authenticate you.
