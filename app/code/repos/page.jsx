import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa"


async function fetchRepositories() {
    const response = await fetch('https://api.github.com/users/Apostu0Alexandru/repos', {
        next: {
            revalidate: 60
        }
    })

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const repositories = await response.json();
    return repositories;
}


const RepositoriesPage = async () => {
    const repositories = await fetchRepositories();


    return <div className="repos-container">
        <h2>Repositories</h2>
        <ul className="repo-list">
            {repositories.map((repository) => (
                <li key={repository.id}>
                    <Link href="/code/repos/${repository.name}">
                        <h3>{repository.name}</h3>
                        <p>{repository.description}</p>
                        <div className="repo-details">
                            <span>
                                <FaStar /> {repository.stargazers_count}
                            </span>
                            <span>
                                <FaCodeBranch /> {repository.forks_count}
                            </span>
                            <span>
                                <FaEye /> {repository.watchers_count}
                            </span>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
}

export default RepositoriesPage;