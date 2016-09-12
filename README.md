# Using OAuth 2.0 to use APIs

OAuth is an open standard for authorization used to sign into 3rd party APIs
without exposing your password.

https://oauth.net/2/

This is an authorization protocol, rather than an authentication protocol.
- Authentication deals with verifying your identity.
- Once authentication has been verified, authorization asks "What are you allowed?"

![alt tag](https://en.wikipedia.org/wiki/File:OpenIDvs.Pseudo-AuthenticationusingOAuth.svg)



- (Not pictured) The user requests a resource or site login from the application.
- The site sees that the user is not authenticated. It formulates a request for the identity provider, encodes it, and sends it to the user as part of a redirect URL.
- The user's browser requests the redirect URL for the identity provider, including the application's request
- If necessary, the identity provider authenticates the user (perhaps by asking them for their username and password)
- Once the identity provider is satisfied that the user is sufficiently authenticated, it processes the application's request, formulates a response, and sends that back to the user along with a redirect URL back to the application.
- The user's browser requests the redirect URL that goes back to the application, including the identity provider's response
- The application decodes the identity provider's response, and carries on accordingly.
- (OAuth only) The response includes an access token which the application can use to gain direct access to the identity provider's services on the user's behalf.

```

```
