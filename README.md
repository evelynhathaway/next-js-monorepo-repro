1. Install and build

```
npm ci
npx vercel build --cwd "apps/next-js-project"

# OR
NEXT_REPRO_TURBOTRACE=1 npx vercel build --cwd "apps/next-js-project"

# OR
NEXT_REPRO_TRACINGROOT=1 npx vercel build --cwd "apps/next-js-project"
# This also has another error during build
```

2. Note that the `.vercel/output` does not include the correct `node_modules` to boot the functions on Vercel

3. Deploy

```
npx vercel deploy --prebuilt --cwd "apps/next-js-project"
```

4. View the preview URL
5. Navigate to xxx.vercel.app/test
6. Look at the errors in the Vercel function logs

```
Cannot find module 'next/dist/server/next-server.js'
Require stack:
- /var/task/___next_launcher.cjs
Did you forget to add it to "dependencies" in `package.json`?
RequestId: fd4f3135-a697-45fe-891a-c0dcd86a9ff8 Error: Runtime exited with error: exit status 1
Runtime.ExitError
```

OR

```
Cannot find module './initialize-require-hook'
Require stack:
- /var/task/node_modules/next/dist/server/next-server.js
- /var/task/apps/public/blue-origin-next-js/___next_launcher.cjs
Did you forget to add it to "dependencies" in `package.json`?
RequestId: 768ef631-d772-4ce0-b447-b7aa8705cbac Error: Runtime exited with error: exit status 1
Runtime.ExitError
```
