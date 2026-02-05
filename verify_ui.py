
from playwright.sync_api import sync_playwright

def verify_techblog():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context()
        page = context.new_page()

        # Verify Home
        try:
            page.goto("http://localhost:4173/")
            page.wait_for_load_state("networkidle")
            page.screenshot(path="verification_home.png", full_page=True)
            print("Home verified")
        except Exception as e:
            print(f"Home failed: {e}")

        # Verify Feed
        try:
            page.goto("http://localhost:4173/feed")
            page.wait_for_load_state("networkidle")
            page.screenshot(path="verification_feed.png", full_page=True)
            print("Feed verified")
        except Exception as e:
            print(f"Feed failed: {e}")

        # Verify Login
        try:
            page.goto("http://localhost:4173/admin/login")
            page.wait_for_load_state("networkidle")
            page.screenshot(path="verification_login.png", full_page=True)
            print("Login verified")
        except Exception as e:
            print(f"Login failed: {e}")

        # Verify Create Post
        try:
            page.goto("http://localhost:4173/admin/posts/new")
            page.wait_for_load_state("networkidle")
            page.screenshot(path="verification_create_post.png", full_page=True)
            print("Create Post verified")
        except Exception as e:
            print(f"Create Post failed: {e}")

        browser.close()

if __name__ == "__main__":
    verify_techblog()
