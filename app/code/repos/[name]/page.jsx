import Repository from "@/app/components/Repository";

const RepoPage = ({ params: { name } }) => {
    return (
        <div className="card">
            <Repository name={name} />
        </div>
    )
}

export default RepoPage;