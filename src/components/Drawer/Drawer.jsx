import { Drawer } from "vaul";

export function MyDrawer() {
	return (
		<Drawer.Root>
			<Drawer.Trigger>Open</Drawer.Trigger>
			<Drawer.Portal>
				<Drawer.Content>
					<Drawer.Handle />
					<p>Content</p>
				</Drawer.Content>
				<Drawer.Overlay />
			</Drawer.Portal>
		</Drawer.Root>
	);
}
