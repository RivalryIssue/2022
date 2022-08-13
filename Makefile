init:
		rm -rf dist
		git worktree add --detach dist
		(cd dist; git checkout --orphan gh-pages)
		(cd dist; git reset --hard)

deploy:
		yarn build
		(cd dist; cp ../CNAME .)
		(cd dist; git add --all)
		(cd dist; git commit -m "Build output as of $(shell git log '--format=format:%H' main -1)" || echo "No changes to commit.")
		(cd dist; git pull -s ours --no-edit origin gh-pages --allow-unrelated-histories || echo "Could not pull from origin.")
		(cd dist; git push -u origin gh-pages)