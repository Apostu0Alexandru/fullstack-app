import { Suspense } from "react";
import Repository from "@/app/components/Repository";
import RepositoryDirectories from "@/app/components/RepositoryDirectory";
import Link from "next/link";


const RepoPage = ({ params: { name } }) => {
    return (
        <div className="card">
            <Link href="/code/repos" className="btn btn-back">
                Back to repositories.
            </Link>
            <Suspense fallback={<div>Loading repositories...</div>}>
                <Repository name={name} />
            </Suspense>
        </div>
    )
}

export default RepoPage;