export default function Footer() {
  return (
    <footer className="bg-light text-center py-3 border-top">
      <small>
        © {new Date().getFullYear()} Kelsey White — Built with React & Bootstrap
      </small>
    </footer>
  );
}